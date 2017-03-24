const exec = require('child_process').exec;
const fs = require('fs');

const p = require('../package.json');
const oldVersion = p.version;

fs.createReadStream(`./design/Sketch43/Plasma@${oldVersion}.sketch`)
  .pipe(fs.createWriteStream(`./design/Sketch43/Plasma-temp.sketch`));