// ==UserScript==
// @name Japanse p redirect
// @namespace https://github.com/myjwatcher
// @desc redirect p to japanese
// @include /https?:\/\/(www.)?nhentai.(net|xxx)\//
// ==/UserScript==



console.log('pext run')

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
