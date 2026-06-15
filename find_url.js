const fs = require('fs');
const https = require('https');

https.get('https://www.freemansgroup.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/href="([^"]*product[^"]*)"/g);
    console.log([...new Set(matches)]);
  });
});
