const REPO_NAME = 'lesson-1';
const BASE_PATH = `/${REPO_NAME}/`;
const CACHE_NAME = 'chinese-lesson-v1';

// Файлы для кеширования (добавьте все важные файлы)
const FILES_TO_CACHE = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}styles.css`,
  `${BASE_PATH}script.js`,
  `${BASE_PATH}manifest.json`,
  `${BASE_PATH}characters-db.js`,
  `${BASE_PATH}frequency-db.js`,
  `${BASE_PATH}lessons-data.js`,
  `${BASE_PATH}phrases-db.js`,
  `${BASE_PATH}pinyin-full-db.js`,
  `${BASE_PATH}all-games.html`,
  `${BASE_PATH}copybook.html`,
  `${BASE_PATH}confusing-radicals.html`,
  `${BASE_PATH}frequency-lesson.html`,
  `${BASE_PATH}hsk1.html`,
  `${BASE_PATH}lesson0.html`,
  `${BASE_PATH}lesson1.html`,
  `${BASE_PATH}mahjong-word-key.html`,
  `${BASE_PATH}phrases-cards.html`,
  `${BASE_PATH}phrases-notebook.html`,
  `${BASE_PATH}pinyin-dictation.html`,
  `${BASE_PATH}syllables.html`,
  `${BASE_PATH}word-match.html`
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Кеширование файлов');
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch(err => console.error('Ошибка кеширования:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) {
          console.log('🗑️ Удаляем старый кеш:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match(`${BASE_PATH}index.html`))
  );
});
