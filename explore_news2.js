const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('news-and-press.html', 'utf8');
const $ = cheerio.load(html);

console.log($('.page-wrap').html().substring(0, 1500));
