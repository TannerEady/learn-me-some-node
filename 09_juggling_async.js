var http = require('http');
var bl = require('bl');
var content = []
var counter = 0
  
function getHttp(index) {
  http.get(process.argv[2 + index], function(res) {
    res.pipe(bl(function (error, data) {
      if (error) {
        return console.error(error)
      }
      content[index] = data.toString()
      counter++
      if (counter == 3) {
        for (var i = 0; i < 3; i++)
        console.log(content[i]);
      }
    }));
  });
}

for (var i = 0; i < 3; i++)
  getHttp(i)