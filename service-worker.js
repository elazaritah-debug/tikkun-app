self.addEventListener("install", e => {
e.waitUntil(
caches.open("tikkun").then(cache => {
return cache.addAll([
"/",
"index.html",
"style.css",
"app.js",
"logo.png"
])
})
)
})
