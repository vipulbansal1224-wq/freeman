const fs = require('fs');
const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/19849158-d5ec-4b9a-8254-b746505369d7/.system_generated/steps/1561/content.md', 'utf8');

const s1 = html.indexOf('class="tools-section"');
const s2 = html.indexOf('<section class="revirew-container ">');
const s3 = html.indexOf('<footer');

fs.writeFileSync('C:/Users/admin/Downloads/freeman/tools_to_review.html', html.substring(s1, s2));
fs.writeFileSync('C:/Users/admin/Downloads/freeman/review_to_footer.html', html.substring(s2, s3));
