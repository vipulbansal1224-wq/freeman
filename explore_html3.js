const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const $ = cheerio.load(html);

console.log("filter-outer:");
console.log($('.filter-outer').html());

console.log("\npage-wrap:");
console.log($('.page-wrap').html().substring(0, 1500));
