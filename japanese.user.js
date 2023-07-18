// ==UserScript==
// @name         Japanese p redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @updateURL https://github.com/myjwatcher/pext/raw/main/japanese.user.js
// downloadURL https://github.com/myjwatcher/pext/raw/main/japanese.user.js
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

if (location.href.match(/^https:\/\/nhentai.net\/tag/)) {
  const s = location.href.replace('https://', '').split('/')
  const name = s[2].replace(/-/g, '+')
  location.href = 'https://nhentai.net/search/?q=+language%3Ajapanese+tag%3A' + name
}

    // Your code here...
})();
