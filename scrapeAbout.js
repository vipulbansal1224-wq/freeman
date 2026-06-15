const https = require('https');
const fs = require('fs');

const url = 'https://www.freemansgroup.com/about-fmi-ltd/';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('about.html', data);
    console.log('Saved about.html, length:', data.length);
  });
}).on('error', err => {
  console.log('Error fetching:', err.message);
});
