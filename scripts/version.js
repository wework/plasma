const exec = require('child_process').exec;
const fs = require('fs');

if (fs.existsSync('./dist/index.js')) {
  fs.unlinkSync('./dist/index.js');
}

if (fs.existsSync('./dist/styles.css')) {
  fs.unlinkSync('./dist/styles.css');
}

const webpack = execSync('webpack --config webpack.config.prod');
const p = require('../package.json');
fs.renameSync(`./design/Sketch43/Plasma-temp.sketch`, `./design/Sketch43/Plasma@${p.version}.sketch`);
const sketchFiles = fs.readdirSync('./design/Sketch43');
sketchFiles.filter(name => new RegExp(`^(?!${p.version}).*$`).test(name)).forEach(fs.unlinkSync);
