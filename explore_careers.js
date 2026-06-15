const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('careers.html', 'utf8');
const $ = cheerio.load(html);

// Find banner
let bannerSrc = '';
const styleAttr = $('.inner-header').attr('style') || '';
const match = styleAttr.match(/url\(['"]?(.*?)['"]?\)/);
if (match) bannerSrc = match[1];

console.log("Banner:", bannerSrc);

// Dump the page-wrap content to see what it is
const pageWrapHtml = $('.page-wrap').html() || '';
console.log(pageWrapHtml.substring(0, 1500));
