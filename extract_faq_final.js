const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('faq.html', 'utf8');
const $ = cheerio.load(html);

const faqCategories = [];

$('.faq-category-item').each((i, catEl) => {
    const categoryTitle = $(catEl).find('.faq-category-title').text().trim();
    const faqs = [];
    
    $(catEl).find('.faq-sub-item').each((j, faqEl) => {
        const question = $(faqEl).find('.faq-sub-question').text().trim();
        let answer = $(faqEl).find('.faq-sub-answer-inner').html() || '';
        
        // Clean up cloudflare email protection if any
        answer = answer.replace(/<a href="\/cdn-cgi.*?<span class="__cf_email__".*?<\/span><\/a>/g, '<a href="mailto:care@freemansgroup.com">care@freemansgroup.com</a>');
        
        if (question) {
            faqs.push({ question, answer: answer.trim() });
        }
    });
    
    if (categoryTitle && faqs.length > 0) {
        faqCategories.push({ categoryTitle, faqs });
    }
});

fs.writeFileSync('faq-data.json', JSON.stringify(faqCategories, null, 2));
console.log(`Extracted ${faqCategories.length} FAQ categories.`);
