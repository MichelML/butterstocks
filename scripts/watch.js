const fs = require('fs')
const exec = require('child_process').exec
const paths = ['./spec']

const npmTest = (eventType) => {
  if (eventType === 'change') {
    exec('npm test', {stdio: 'inherit'}, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    })
  }
}

const watch = () => {
  paths.forEach(path => fs.watch(path, {encoding: 'buffer', recursive: true}, npmTest))
}


if (require.main === module) {
  watch()
}
