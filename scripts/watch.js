const watch = require('watch')
const sh = require('shelljs')

watch.createMonitor('./spec', function (monitor) {
  monitor.files['./spec/specs.js'] // Stat object for my zshrc.
  monitor.on('created', function (f, stat) {
    if (/specs\.js$/.test(f)) sh.exec('node node_modules/jasmine/bin/jasmine.js ./spec/specs.js')
  })
  monitor.on('changed', function (f, curr, prev) {
    if (/specs\.js$/.test(f)) sh.exec('node node_modules/jasmine/bin/jasmine.js ./spec/specs.js')
  })
  monitor.on('removed', function (f, stat) {
    if (/specs\.js$/.test(f)) sh.exec('node node_modules/jasmine/bin/jasmine.js ./spec/specs.js')
  })
})
