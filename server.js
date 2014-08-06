var express = require('express'),
    http = require('http'),
    app = express();

function start() {
  app.use(express.static(__dirname + '/static'));

  var server = http.createServer(app);
  server.listen(3000, function() {
    console.log('server running on 3000');
  });
}

// To make this function available as a module
exports.start = start;
