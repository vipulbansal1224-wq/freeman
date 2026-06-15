const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('faq.html', 'utf8');
const $ = cheerio.load(html);

const faqCategories = [];

$('.faq-category-item').each((i, catEl) => {
    const categoryTitle = $(catEl).find('.faq-category-title').text().trim();
    const faqs = [];
    
    $(catEl).find('.faq-sub-item').each((j, faqEl) => {
        const question = $(faqEl).find('.faq-sub-title').text().trim() || $(faqEl).find('h4, strong, .faq-sub-question').text().trim();
        // Since I truncated the HTML earlier, let's just dump the HTML of the first faq-sub-item to see exact classes
        faqs.push({ html: $(faqEl).html() });
    });
    
    if (categoryTitle) {
        faqCategories.push({ categoryTitle, faqs });
    }
});

console.log(JSON.stringify(faqCategories[0], null, 2));
