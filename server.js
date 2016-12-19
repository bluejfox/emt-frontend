var express = require("express");
var request = require("request");
var qs = require('querystring');
var bodyParser = require('body-parser');
var config = require('./config.js');
var app = express();

app.use("/client", express.static('app'));
app.use('/', function(req, res) {
    var url = config.serviceBaseUrl + req.url;
    console.log(url);
    req.pipe(request(url)).pipe(res);
});

app.use('/stream', function(req, res) {
    // todo need require through module
    // req.pipe(through(write, end)).pipe(res);
});

// app.use(bodyParser.json());

app.listen(process.env.VCAP_APP_PORT || 3000);
