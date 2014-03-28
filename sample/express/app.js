
/**
 * Module dependencies.
 */

 var elmo = require("../../.").connect.elmo;
 var logger = require("../../.").logger;

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);

app.use(elmo({ELMO_URL:"http://localhost:3180"}));
app.use(app.router);

app.get('/', function(req, res) {
    logger().log("fetching /");
    res.send({ title: 'Express' });
    logger().log("done /");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
