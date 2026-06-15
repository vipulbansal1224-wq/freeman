const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('faq.html', 'utf8');
const $ = cheerio.load(html);

// Find banner
let bannerSrc = '';
const styleAttr = $('.inner-header').attr('style') || '';
const match = styleAttr.match(/url\(['"]?(.*?)['"]?\)/);
if (match) bannerSrc = match[1];

console.log("Banner:", bannerSrc);

// Look for Q&A
// The original site uses a plugin called responsive-accordion-and-collapse
const faqs = [];
$('.panel-default').each((i, el) => {
    const question = $(el).find('.panel-title a').text().trim();
    // The answer might have multiple paragraphs or HTML inside .panel-body
    const answerHtml = $(el).find('.panel-body').html() || '';
    if (question) faqs.push({ question, answer: answerHtml.trim() });
});

if (faqs.length === 0) {
    console.log("Could not find .panel-default. Let's dump the page-wrap content to find it.");
    console.log($('.page-wrap').html().substring(0, 1500));
} else {
    fs.writeFileSync('faq-data.json', JSON.stringify(faqs, null, 2));
    console.log(`Extracted ${faqs.length} FAQs. First Q: ${faqs[0].question}`);
}
