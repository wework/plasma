const exec = require('child_process').exec;
const fs = require('fs');

fs.access('./dist/index.js', fs.constants.R_OK, (err) => {
  console.log(err);
  if (!err) {
    console.log('Deleting /dist/index.js');
    fs.unlinkSync('./dist/index.js');
  }
});
fs.access('./dist/styles.css', fs.constants.R_OK, (err) => {
  if (!err) {
    console.log('Deleting /dist/styles.css');
    fs.unlinkSync('./dist/styles.css');
  }
});

const webpack = exec('webpack --config webpack.config.prod', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  }
  console.log(stdout);
});

webpack.on('exit', (code) => {
  const p = require('../package.json');
  console.log(p.version);
  if (code === 0) {
    fs.renameSync(`./design/Sketch43/Plasma-temp.sketch`, `./design/Sketch43/Plasma${p.version}.sketch`);
  }
});