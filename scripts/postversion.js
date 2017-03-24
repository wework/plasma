const execSync = require('child_process').execSync;

const gitPush = execSync('git push origin master && git push origin --tags');
