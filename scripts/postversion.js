const execSync = require('child_process').execSync;

execSync('git push origin master && git push origin --tags');
