// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/index.html',
    '/offline/index.html',
    '/404.html',
    '/research/index.html',
    '/courses/index.html',
    '/trivia/index.html',
    '/email/index.html',
    '/bio/index.html',
    '/subdomains/index.html',
    '/css/bootstrap.min.css',
    '/css/fontawesome.min.css',
    '/css/hugo-academic.min.css',
    '/site.webmanifest.json',
    '/img/me.jpg',
    '/img/apple-touch-icon.png?v=ngkpR7vzgN',
    '/img/favicon-32x32.png?v=ngkpR7vzgN',
    '/img/favicon-16x16.png?v=ngkpR7vzgN',
    '/img/android-chrome-192x192.png?v=ngkpR7vzgN',
    '/img/safari-pinned-tab.svg?v=ngkpR7vzgN',
    '/img/favicon.ico?v=ngkpR7vzgN',
    '/img/mstile-150x150.png?v=ngkpR7vzgN',
    '/img/android-chrome-512x512.png?v=ngkpR7vzgN',
    '/img/tech-logo.png?v=3',
    '/img/ct-art.jpg',
    '/img/bloomberg.jpg',
    '/img/portrait.jpg',
    '/img/tatastairs.jpg',
    '/js/TweenMax.min.js',
    '/js/ScrollToPlugin.min.js',
    '/js/highlight.min.js',
    '/js/jquery-1.12.3.min.js',
    '/js/bootstrap.min.js',
    '/js/hugo-academic.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  console.log('Finally active. Ready to start serving content!');  
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('push', function(event) {  
  var title = 'Yay a message.';  
  var body = 'We have received a push message.';  
  var icon = '/img/favicon-32x32.png?v=ngkpR7vzgN';
  var tag = 'simple-push-example-tag';
  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag  
    })  
  );
});
