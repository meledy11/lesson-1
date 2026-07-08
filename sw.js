// ============================================================
// service-worker.js — ПОЛНОСТЬЮ РАБОЧИЙ SERVICE WORKER
// ============================================================

const REPO_NAME = 'lesson-1';
const BASE_PATH = `/${REPO_NAME}/`;
const CACHE_NAME = 'chinese-lesson-v6';

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

    // ===== ИКОНКИ =====
    `${BASE_PATH}favicon.ico`,
    `${BASE_PATH}icon-192.png`,
    `${BASE_PATH}icon-512.png`,

    // ===== БИБЛИОТЕКА HANZI WRITER =====
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/hanzi-writer.min.js',
];

// ============================================================
// ВСЕ ДАННЫЕ HANZI WRITER ДЛЯ ВСЕХ КЛЮЧЕЙ (160+)
// ============================================================
const HANZI_KEYS = [
    '上', '下', '中', '人', '大', '小', '口', '心', '水', '火',
    '日', '月', '手', '山', '花', '好', '爱', '学', '国', '家',
    '吃', '打', '开', '关', '风', '电', '老', '多', '少', '快',
    '天', '年', '文', '言', '音', '空', '店', '海', '看', '听',
    '说', '话', '想', '会', '做', '知', '道', '间', '房', '路',
    '钱', '习', '洗', '刷', '点', '护', '信', '名', '意', '情',
    '头', '面', '地', '动', '来', '放', '生', '见', '事', '长',
    '冷', '白', '光', '米', '茶', '酒', '拿', '带', '穿', '换',
    '用', '门', '里', '前', '后', '男', '父', '冰', '走', '去',
    '回', '给', '让', '把', '被', '得', '着', '机', '玩', '站',
    '喝', '写', '读', '视', '发', '收', '送', '坐', '行', '飞',
    '校', '教', '观', '笑', '哭', '跑', '舞', '病', '院', '医',
    '食', '衣', '住', '对', '书', '歌', '乐', '影', '场', '新',
    '旧', '网', '线', '课', '室', '楼', '友', '亲', '母', '子',
    '公', '共', '合', '作', '品', '商', '物', '理', '科', '园',
    '果', '实', '验', '考', '试', '问', '答', '找', '等', '急',
    '慢', '总', '经', '常', '正', '真', '假', '应', '该', '别',
    '特', '所', '以', '为', '因', '件', '息', '休', '停', '始',
    '终', '表', '示', '解', '决', '定', '规', '则', '求', '助',
    '帮', '忙', '思', '念', '久', '永', '远', '近', '离', '再',
    '次', '每', '过'
];

// Добавляем JSON файлы для Hanzi Writer
HANZI_KEYS.forEach(key => {
    FILES_TO_CACHE.push(`https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/${key}.json`);
});

console.log('📋 Всего файлов для кеширования:', FILES_TO_CACHE.length);

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
            console.log('✅ Service Worker активирован!');
            console.log('📦 Версия кеша:', CACHE_NAME);
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

    // Для навигации (HTML)
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
                            return caches.match(`${BASE_PATH}index.html`);
                        });
                })
        );
        return;
    }

    // Для статики и Hanzi Writer
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                // Пытаемся загрузить из сети
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
                        // Для изображений — показываем заглушку
                        if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg|ico)$/)) {
                            return caches.match(`${BASE_PATH}favicon.ico`);
                        }
                        // Для Hanzi Writer — возвращаем заглушку
                        if (event.request.url.includes('cdn.jsdelivr.net')) {
                            return new Response(JSON.stringify({ error: 'Данные не найдены' }), {
                                status: 404,
                                headers: { 'Content-Type': 'application/json' }
                            });
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
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

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

    if (event.data && event.data.type === 'GET_CACHE_STATS') {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(async cache => {
                    const keys = await cache.keys();
                    let totalSize = 0;
                    for (const request of keys) {
                        const response = await cache.match(request);
                        if (response) {
                            const blob = await response.blob();
                            totalSize += blob.size;
                        }
                    }
                    return event.ports[0].postMessage({
                        version: CACHE_NAME,
                        fileCount: keys.length,
                        totalSize: Math.round(totalSize / 1024 / 1024 * 10) / 10 + ' MB'
                    });
                })
                .catch(err => {
                    event.ports[0].postMessage({ error: err.message });
                })
        );
    }
});

console.log('✅ Service Worker загружен!');
console.log('📦 Версия кеша:', CACHE_NAME);
console.log('📋 Файлов для кеширования:', FILES_TO_CACHE.length);
