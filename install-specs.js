const { get } = require('https');
const { createWriteStream } = require('fs');
const { createUnzip } = require('zlib');

Object.entries(require('./urls')).forEach(([region, url]) => {
  get(url, res => {
    res.pipe(createUnzip()).pipe(createWriteStream(`${region}.json`));
  });
});
