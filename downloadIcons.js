const https = require('https');
const fs = require('fs');

const baseUrl = 'https://www.freemansgroup.com/wp-content/themes/freemans/images/';
const icons = ['address-icon-footer.png', 'email-icon-footer.png', 'phone-icon-footer.png', 'fb-icon.png', 'linkedin.png', 'instagram.png', 'yt-icon.png'];

icons.forEach(icon => {
  https.get(baseUrl + icon, (res) => {
    res.pipe(fs.createWriteStream('public/images/' + icon));
  });
});

https.get('https://www.freemansgroup.com/wp-content/uploads/2023/03/logo-footer.png', (res) => {
  res.pipe(fs.createWriteStream('public/images/logo-footer.png'));
});

https.get('https://www.freemansgroup.com/wp-content/uploads/2026/04/75plus-Year-new_200x200-1.png', (res) => {
    res.pipe(fs.createWriteStream('public/images/75plus-Year-new_200x200-1.png'));
});
