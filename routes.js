var appRouter = function (app) {
    var _api = require(__dirname +'/powerbi-api-calls-sample.js');  

    app.get("/test", function(req, res) {
       return _api.test();
       });

    app.get("/getReport", async function(req, res) {
     return await _api.getReport();
    });
  }
  
  module.exports = appRouter;