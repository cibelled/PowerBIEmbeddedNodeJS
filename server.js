var express = require("express");
var bodyParser = require("body-parser");
var routes = require(__dirname + '/routes.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


routes(app);

var server = app.listen(8080, function () {
    console.log("app running on port.", server.address().port);
});
