var express = require("express");
var logfmt = require("logfmt");
var fs = require('fs');
var index = fs.readFileSync('app/index.html');
var app = express();
app.use(logfmt.requestLogger());

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.end(index);
});
var port = Number(process.env.PORT || 8080);
app.listen(port, function() {
    console.log("Listening on " + port);
});