const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const $ = cheerio.load(html);

console.log("Body children:");
$('body').children().each((i, el) => {
    console.log(el.tagName, $(el).attr('id') || '', $(el).attr('class') || '');
});

console.log("\nMain content div:");
const main = $('#page') || $('.content-area') || $('main');
if (main) {
    console.log(main.html() ? main.html().substring(0, 1500) : "Main content empty");
}
