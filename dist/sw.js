const CACHE_NAME = 'autokey-inventory-v2';
const urlsToCache = [
  '/',
  '/admin/inventory',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for inventory updates
self.addEventListener('sync', (event) => {
  if (event.tag === 'inventory-sync') {
    event.waitUntil(syncInventoryData());
  }
});

async function syncInventoryData() {
  try {
    // Get pending changes from IndexedDB
    const pendingChanges = await getPendingChanges();
    
    if (pendingChanges.length > 0) {
      // Sync each change (in a real implementation, this would sync to your server)
      console.log('Syncing inventory changes:', pendingChanges);
      
      // Clear pending changes after successful sync
      await clearPendingChanges();
    }
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

// Helper functions for IndexedDB operations
async function getPendingChanges() {
  // In a real implementation, this would read from IndexedDB
  return JSON.parse(localStorage.getItem('inventory_pending_changes') || '[]');
}

async function clearPendingChanges() {
  localStorage.removeItem('inventory_pending_changes');
}