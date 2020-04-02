/*
  This is a very basic server running with Express
  
  Install : npm install express chalk debug morgan --save
  
  Run : node app.js
        Linux   : DEBUG=* node app.js
                  DEBUG=app node app.js
        Windows : set DEBUG=* & node app.js
                  set DEBUG=app & node app.js

*/
var express = require('express');
var chalk = require('chalk'); // chalk
//var debug = require('debug'); // debug 1
var debug = require('debug')('app'); // debug 2
var morgan = require('morgan'); // morgan

var app = express();
//app.use(morgan('combined')); // morgan 1
//app.use(require('morgan')('combined')); // Short definition - morgan 2
app.use(morgan('tiny')); // tiny -- morgan 3

app.get('/', function(req, res) {
    res.send("Hello from my library app");
});

app.listen(3000, function() {
    //console.log('Listening on port 3000');
    console.log('Listening on port ' + chalk.green('3000')); // chalk 1
    //console.log(`Listening on port ${chalk.green('3000')}`); // chalk 2 (ES6 Notation)
    debug(`Listening on port ${chalk.green('3000')}`); // debug
});