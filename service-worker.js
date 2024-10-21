// ملف Service Worker

// تثبيت الـ Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
    // هنا يمكنك إضافة ملفات إلى الـ cache إذا كنت تريد
});

// تفعيل الـ Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activated');
});

// التعامل مع طلبات fetch
self.addEventListener('fetch', (event) => {
    console.log(`Fetching: ${event.request.url}`);
    // هنا يمكنك التحكم في طلبات الشبكة أو تقديم استجابة مخصصة
});
