var express = require('express');

var app = express(express.logger());

app.get('/', function(req, res) {
  res.send('Express Heroku');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
