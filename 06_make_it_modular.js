var filter = require('./06_make_it_modular_filter.js')
var dir = process.argv[2]
var fileExt = process.argv[3]

filter(dir, fileExt, function (err, list) {
  if (err)
    return console.error("An error occurred.", err)
  list.forEach(function (file) {
    console.log(file)
  });
});