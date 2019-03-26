const fs = require('fs');

if (fs.existsSync('./dist/index.js')) {
  fs.unlinkSync('./dist/index.js');
}

if (fs.existsSync('./dist/styles.css')) {
  fs.unlinkSync('./dist/styles.css');
}
