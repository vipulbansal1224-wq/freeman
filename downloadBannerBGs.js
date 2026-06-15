const https = require('https');
const fs = require('fs');

const bgs = [
  'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banners-Pocket-Tapes-1.webp',
  'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banners-Fibreglass-1.webp',
  'https://www.freemansgroup.com/wp-content/uploads/2023/03/Banner-Long-steel-1.jpg',
  'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banner-Spirit-Levels-1.webp',
  'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banners-Measuring-Wheel-1.webp'
];

bgs.forEach(url => {
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  https.get(url, (res) => {
    res.pipe(fs.createWriteStream('public/images/' + filename));
  });
});
