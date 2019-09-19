var appRouter = function (app) {
    var _api = require(__dirname +'/powerbi-api-calls-sample.js');
    var path = require("path");  
    var express1 = require('express');

    app.use(express1.static(path.join(__dirname+'/public')));

    app.get("/test", function(req, res) {
       return _api.test();
       });

    app.get("/getReport", async function(req, res) {
     return await _api.getReport();
    });

    app.get("/showReport", function(req,res) {
      res.sendFile(path.join(__dirname +'/index.html'))
    });

  }
  
  module.exports = appRouter;