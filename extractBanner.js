const fs = require('fs');
const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/19849158-d5ec-4b9a-8254-b746505369d7/.system_generated/steps/1561/content.md', 'utf8');

const s1 = html.indexOf('<section class="banner-section">');
const s2 = html.indexOf('<div class="section-about">');

if (s1 !== -1 && s2 !== -1) {
  fs.writeFileSync('C:/Users/admin/Downloads/freeman/banner.html', html.substring(s1, s2));
} else {
  console.log('Not found!', s1, s2);
}
