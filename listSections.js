const fs = require('fs');
const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/19849158-d5ec-4b9a-8254-b746505369d7/.system_generated/steps/1561/content.md', 'utf8');

// Find all sections
const sectionRegex = /<section[^>]*class=["']([^"']+)["'][^>]*>/gi;
let match;
while ((match = sectionRegex.exec(html)) !== null) {
  console.log('Section:', match[1]);
}

// Find all big divs that might be sections
const divRegex = /<div[^>]*class=["']([^"']+)["'][^>]*>/gi;
const divs = [];
while ((match = divRegex.exec(html)) !== null) {
  if (match[1].includes('section') || match[1].includes('wrap')) {
     divs.push(match[1]);
  }
}
console.log('Divs (section/wrap):', new Set(divs));
