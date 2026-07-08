// ============================================================
// service-worker.js — ПОЛНОСТЬЮ РАБОЧИЙ SERVICE WORKER
// ============================================================

const REPO_NAME = 'lesson-1';
const BASE_PATH = `/${REPO_NAME}/`;
const CACHE_NAME = 'chinese-lesson-v5';

// ============================================================
// ФАЙЛЫ ДЛЯ КЕШИРОВАНИЯ
// ============================================================
const FILES_TO_CACHE = [
    // ===== ОСНОВНЫЕ ФАЙЛЫ =====
    BASE_PATH,
    `${BASE_PATH}index.html`,
    `${BASE_PATH}styles.css`,
    `${BASE_PATH}script.js`,
    `${BASE_PATH}manifest.json`,

    // ===== БАЗЫ ДАННЫХ =====
    `${BASE_PATH}characters-db.js`,
    `${BASE_PATH}frequency-db.js`,
    `${BASE_PATH}lessons-data.js`,
    `${BASE_PATH}phrases-db.js`,
    `${BASE_PATH}pinyin-full-db.js`,
    `${BASE_PATH}texts-db.js`,
    `${BASE_PATH}keys-data.js`,
    `${BASE_PATH}etymology-data.js`,

    // ===== СТРАНИЦЫ УРОКОВ =====
    `${BASE_PATH}frequency-lesson.html`,
    `${BASE_PATH}lesson0.html`,
    `${BASE_PATH}lesson1.html`,

    // ===== СТРАНИЦЫ ИГР =====
    `${BASE_PATH}all-games.html`,
    `${BASE_PATH}copybook.html`,
    `${BASE_PATH}confusing-radicals.html`,
    `${BASE_PATH}mahjong-word-key.html`,
    `${BASE_PATH}phrases-cards.html`,
    `${BASE_PATH}phrases-notebook.html`,
    `${BASE_PATH}pinyin-dictation.html`,
    `${BASE_PATH}syllables.html`,
    `${BASE_PATH}word-match.html`,
    `${BASE_PATH}majongsborka.html`,

    // ===== СТРАНИЦЫ СЛОВАРЕЙ =====
    `${BASE_PATH}keys.html`,
    `${BASE_PATH}hsk1.html`,
    `${BASE_PATH}texts-viewer.html`,

    // ===== НОВЫЕ СТРАНИЦЫ =====
    `${BASE_PATH}magic.html`,
    `${BASE_PATH}question-words.html`,
    `${BASE_PATH}etymology.html`,

    // ===== ИКОНКИ И ИЗОБРАЖЕНИЯ =====
    `${BASE_PATH}favicon.ico`,
    `${BASE_PATH}icon-192.png`,
    `${BASE_PATH}icon-512.png`,

    // ===== ВНЕШНИЕ БИБЛИОТЕКИ (CDN) =====
    // Hanzi Writer
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/hanzi-writer.min.js',
];

// ============================================================
// УСТАНОВКА (INSTALL)
// ============================================================
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Кеширование файлов...');
                return cache.addAll(FILES_TO_CACHE)
                    .then(() => {
                        console.log('✅ Все файлы закешированы!');
                        console.log('📋 Всего файлов:', FILES_TO_CACHE.length);
                    })
                    .catch(err => {
                        console.error('❌ Ошибка кеширования:', err);
                        // Продолжаем даже если часть файлов не закешировалась
                        return Promise.resolve();
                    });
            })
    );
    self.skipWaiting();
});

// ============================================================
// АКТИВАЦИЯ (ACTIVATE)
// ============================================================
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    console.log('🗑️ Удаляем старый кеш:', key);
                    return caches.delete(key);
                }
            }));
        }).then(() => {
            console.log('✅ Service Worker активирован, кеш обновлён!');
            console.log('📦 Текущая версия кеша:', CACHE_NAME);
            return self.clients.claim();
        })
    );
});

// ============================================================
// ПЕРЕХВАТ ЗАПРОСОВ (FETCH)
// ============================================================
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Пропускаем запросы к другим доменам (кроме CDN)
    if (url.origin !== self.location.origin && !url.hostname.includes('cdn.jsdelivr.net')) {
        return;
    }

    // ===== НАВИГАЦИЯ (HTML-страницы) =====
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request)
                        .then(fetchResponse => {
                            if (fetchResponse && fetchResponse.status === 200) {
                                const clone = fetchResponse.clone();
                                caches.open(CACHE_NAME).then(cache => {
                                    cache.put(event.request, clone);
                                });
                            }
                            return fetchResponse;
                        })
                        .catch(() => {
                            // Если страница не найдена — показываем index.html
                            return caches.match(`${BASE_PATH}index.html`);
                        });
                })
        );
        return;
    }

    // ===== СТАТИЧЕСКИЕ ФАЙЛЫ =====
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                return fetch(event.request)
                    .then(fetchResponse => {
                        if (fetchResponse && fetchResponse.status === 200) {
                            const clone = fetchResponse.clone();
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, clone);
                            });
                        }
                        return fetchResponse;
                    })
                    .catch(() => {
                        // Если файл не найден — показываем заглушку для изображений
                        if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg|ico)$/)) {
                            return caches.match(`${BASE_PATH}favicon.ico`);
                        }
                        return new Response('Файл не найден', { status: 404 });
                    });
            })
    );
});

// ============================================================
// ОБРАБОТКА СООБЩЕНИЙ
// ============================================================
self.addEventListener('message', event => {
    // Пропустить ожидание и активировать сразу
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    // Принудительное обновление кеша
    if (event.data && event.data.type === 'REFRESH_CACHE') {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(cache => {
                    console.log('🔄 Обновление кеша...');
                    return cache.addAll(FILES_TO_CACHE)
                        .then(() => console.log('✅ Кеш обновлён!'))
                        .catch(err => console.error('❌ Ошибка обновления кеша:', err));
                })
        );
    }

    // Получить статистику кеша
    if (event.data && event.data.type === 'GET_CACHE_STATS') {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(async cache => {
                    const keys = await cache.keys();
                    const totalSize = await keys.reduce(async (acc, request) => {
                        const response = await cache.match(request);
                        if (response) {
                            const blob = await response.blob();
                            return (await acc) + blob.size;
                        }
                        return acc;
                    }, Promise.resolve(0));
                    return event.ports[0].postMessage({
                        version: CACHE_NAME,
                        fileCount: keys.length,
                        totalSize: totalSize,
                        files: keys.map(k => k.url)
                    });
                })
                .catch(err => {
                    event.ports[0].postMessage({
                        error: err.message
                    });
                })
        );
    }
});

// ============================================================
// ПРОВЕРКА СОСТОЯНИЯ (HEALTH CHECK)
// ============================================================
self.addEventListener('activate', event => {
    // Проверяем, что все важные файлы закешированы
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                const missingFiles = [];
                const checkPromises = FILES_TO_CACHE.map(async (url) => {
                    try {
                        const response = await cache.match(url);
                        if (!response) {
                            missingFiles.push(url);
                        }
                    } catch (e) {
                        missingFiles.push(url);
                    }
                });
                return Promise.all(checkPromises)
                    .then(() => {
                        if (missingFiles.length > 0) {
                            console.warn('⚠️ Отсутствуют файлы в кеше:', missingFiles);
                        } else {
                            console.log('✅ Все файлы присутствуют в кеше!');
                        }
                    });
            })
    );
});

console.log('✅ Service Worker загружен!');
console.log('📦 Версия кеша:', CACHE_NAME);
console.log('📋 Файлов для кеширования:', FILES_TO_CACHE.length);
