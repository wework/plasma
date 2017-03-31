const execSync = require('child_process').execSync;

const gitPush = execSync('git push origin master && git push origin --tags');
const symlink = execSync('cd ./design/Sketch43 && find . -name \"Plasma*\" -exec ln -s {} ~/Library/\"Application Support\"/com.bohemiancoding.sketch3/Templates \\;');
