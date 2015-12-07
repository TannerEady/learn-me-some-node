var fs = require('fs')

var contents = fs.readFile(process.argv[2], function (err, contents) {
  var numlines = contents.toString().split('\n').length - 1
  console.log(numlines)
});
