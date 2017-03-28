const colors = require('colors');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const p = require('../package.json');
const currentVersion = p.version;

rl.question('What kind of release are you creating (current version is' + currentVersion + ')? '.green, (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
