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

    // ===== ИКОНКИ И ИЗОБРАЖЕНИЯ =====
    `${BASE_PATH}favicon.ico`,
    `${BASE_PATH}icon-192.png`,
    `${BASE_PATH}icon-512.png`,

    // ===== ВНЕШНИЕ БИБЛИОТЕКИ (CDN) =====
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/hanzi-writer.min.js',

    // ===== ДАННЫЕ HANZI WRITER ДЛЯ ВСЕХ КЛЮЧЕЙ =====
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/上.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/下.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/中.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/人.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/大.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/小.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/口.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/心.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/水.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/火.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/日.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/月.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/手.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/山.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/花.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/好.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/爱.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/学.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/国.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/家.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/吃.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/打.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/开.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/关.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/风.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/电.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/老.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/多.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/少.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/快.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/天.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/年.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/文.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/言.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/音.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/空.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/店.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/海.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/看.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/听.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/说.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/话.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/想.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/会.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/做.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/知.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/道.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/间.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/房.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/路.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/钱.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/习.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/洗.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/刷.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/点.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/护.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/信.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/名.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/意.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/情.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/头.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/面.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/地.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/动.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/来.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/放.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/生.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/见.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/事.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/长.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/冷.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/白.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/光.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/米.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/茶.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/酒.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/拿.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/带.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/穿.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/换.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/用.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/门.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/里.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/前.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/后.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/男.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/父.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/冰.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/走.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/去.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/回.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/给.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/让.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/把.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/被.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/得.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/着.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/机.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/玩.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/站.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/喝.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/写.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/读.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/视.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/发.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/收.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/送.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/坐.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/行.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/飞.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/校.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/教.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/观.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/笑.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/哭.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/跑.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/舞.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/病.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/院.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/医.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/食.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/衣.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/住.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/对.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/书.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/歌.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/乐.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/影.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/场.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/新.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/旧.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/网.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/线.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/课.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/室.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/楼.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/友.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/亲.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/母.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/子.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/公.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/共.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/合.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/作.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/品.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/商.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/物.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/理.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/科.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/园.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/果.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/实.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/验.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/考.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/试.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/问.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/答.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/找.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/等.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/急.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/慢.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/总.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/经.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/常.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/正.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/真.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/假.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/应.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/该.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/别.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/特.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/所.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/以.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/为.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/因.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/件.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/息.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/休.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/停.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/始.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/终.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/表.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/示.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/解.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/决.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/定.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/规.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/则.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/求.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/助.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/帮.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/忙.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/思.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/念.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/久.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/永.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/远.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/近.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/离.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/再.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/次.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/每.json',
    'https://cdn.jsdelivr.net/npm/hanzi-writer@3.7.3/dist/data/过.json',
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

    if (url.origin !== self.location.origin && !url.hostname.includes('cdn.jsdelivr.net')) {
        return;
    }

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

console.log('✅ Service Worker загружен!');
console.log('📦 Версия кеша:', CACHE_NAME);
console.log('📋 Файлов для кеширования:', FILES_TO_CACHE.length);
