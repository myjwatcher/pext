// ==UserScript==
// @name Japanse p redirect
// @namespace https://github.com/myjwatcher
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/search?q=greasemonkey+script+how+to+create&oq=greasemonkey+script+how+to+create&aqs=chrome..69i57j0l5.4077j0j7&sourceid=chrome&ie=UTF-8
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @include /https?:\/\/(www.)?nhentai.(net|xxx)\//
// ==/UserScript==

(function() {
'use strict';

if (location.href.match(/^https:\/\/hentai2read.com\/[^\/]+\/$/)) {
  location.href = location.href + '1/'
}

if (location.href.match(/^https:\/\/www.luscious.net\/albums\/[^\/]+\/$/)) {
  location.href = location.href + 'read/?index=0'
}

if (location.href.match(/^https:\/\/members.luscious.net\/albums\/[^\/]+\/$/)) {
  location.href = location.href + 'read/?index=0'
}

if (location.href.match(/^https:\/\/nhentai.net\/artist/)) {
  const s = location.href.replace('https://', '').split('/')
  const name = s[2].replace(/-/g, '+')
  location.href = 'https://nhentai.net/search/?q=+language%3Ajapanese+artist%3A' + name
}
  

// if (location.href.match(/nhentai\.net/)) {
//   document.querySelectorAll('.gallery').forEach(x=> {
//     const a = x.querySelector('a')
//     if (!a.href.includes('download')) {
//       a.href = a.href += 'download'
//     }
//   })
// }

  
    // Your code here...
})();

