const REPO_NAME = 'lesson-1';
const BASE_PATH = `/${REPO_NAME}/`;
const CACHE_NAME = 'chinese-lesson-v3';

// Файлы для кеширования (все важные файлы)
const FILES_TO_CACHE = [
  // Основные файлы
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}styles.css`,
  `${BASE_PATH}script.js`,
  `${BASE_PATH}manifest.json`,
  
  // Базы данных
  `${BASE_PATH}characters-db.js`,
  `${BASE_PATH}frequency-db.js`,
  `${BASE_PATH}lessons-data.js`,
  `${BASE_PATH}phrases-db.js`,
  `${BASE_PATH}pinyin-full-db.js`,
  `${BASE_PATH}texts-db.js`,
  `${BASE_PATH}keys-data.js`,
  
  // Страницы уроков
  `${BASE_PATH}frequency-lesson.html`,
  `${BASE_PATH}lesson0.html`,
  `${BASE_PATH}lesson1.html`,
  
  // Страницы игр
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
  
  // Новые страницы
  `${BASE_PATH}keys.html`,
  `${BASE_PATH}hsk1.html`,
  `${BASE_PATH}texts-viewer.html`,
  
  // ===== НОВАЯ СТРАНИЦА: ВОПРОСИТЕЛЬНЫЕ СЛОВА =====
  `${BASE_PATH}question-words.html`,
  
  // Иконки и изображения (если есть)
  `${BASE_PATH}favicon.ico`,
  `${BASE_PATH}icon-192.png`,
  `${BASE_PATH}icon-512.png`,
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
            // Продолжаем даже если некоторые файлы не закешировались
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
  
  // Пропускаем запросы не к нашему приложению
  if (url.origin !== self.location.origin) {
    // Для внешних ресурсов (например, Google Fonts) — не кешируем
    return;
  }
  
  // Для HTML-страниц - сначала кеш, потом сеть, потом fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            console.log('📄 Из кеша (HTML):', event.request.url);
            return response;
          }
          console.log('🌐 Загрузка из сети (HTML):', event.request.url);
          return fetch(event.request)
            .then(fetchResponse => {
              // Кешируем полученную страницу для будущих посещений
              if (fetchResponse && fetchResponse.status === 200) {
                const clone = fetchResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, clone);
                });
              }
              return fetchResponse;
            })
            .catch(() => {
              console.log('⚠️ Fallback на index.html');
              return caches.match(`${BASE_PATH}index.html`);
            });
        })
    );
    return;
  }
  
  // Для статических файлов (JS, CSS, изображения)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Для отладки: показываем, что файл найден в кеше
          if (event.request.url.match(/\.(js|css|html)$/)) {
            console.log('📄 Из кеша (статичный):', event.request.url);
          }
          return response;
        }
        console.log('🌐 Загрузка из сети (статичный):', event.request.url);
        return fetch(event.request)
          .then(fetchResponse => {
            // Кешируем успешно загруженные файлы
            if (fetchResponse && fetchResponse.status === 200) {
              const clone = fetchResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, clone);
              });
            }
            return fetchResponse;
          })
          .catch(() => {
            // Для изображений можно вернуть заглушку
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
  
  // Обработка запроса на обновление кеша
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
});

// ============================================================
// ОБРАБОТКА ПУШ-УВЕДОМЛЕНИЙ (если нужно)
// ============================================================
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '📚 Весёлый китайский';
  const options = {
    body: data.body || 'Новый урок готов!',
    icon: `${BASE_PATH}icon-192.png`,
    badge: `${BASE_PATH}icon-192.png`,
    vibrate: [200, 100, 200],
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// ============================================================
// ОБРАБОТКА КЛИКА ПО УВЕДОМЛЕНИЮ
// ============================================================
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(BASE_PATH)
  );
});

console.log('✅ Service Worker загружен!');
console.log('📦 Версия кеша:', CACHE_NAME);
console.log('📋 Файлов для кеширования:', FILES_TO_CACHE.length);
