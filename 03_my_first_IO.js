var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var numlines = contents.toString().split('\n').length - 1
console.log(numlines)