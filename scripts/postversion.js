const execSync = require('child_process').execSync;

const gitPush = execSync('git push && git push --tags');
