var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'
 QDiSYdl217
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
