/*
  This is a very basic server running with Express
  
  Run : node app.js
        Linux   : DEBUG=* node app.js
                  DEBUG=app node app.js
        Windows : set DEBUG=* & node app.js
                  set DEBUG=app & node app.js

*/
var express = require('express');
var chalk = require('chalk'); 
var debug = require('debug')('app'); 
var morgan = require('morgan'); 

// Version 2
var path = require('path'); // add Path package for handling full path problems

var app = express();
app.use(morgan('tiny'));

app.get('/', function(req, res) {
    // res.send("Hello from my library app");
    // Version 1
    //res.sendFile(__dirname + 'views/index.html',""); // !! add Path package
    
    // Version 2
    res.sendFile(path.join(__dirname , '/views/index.html'));
});

app.listen(3000, function() {
    debug(`Listening on port ${chalk.green('3000')}`); // debug
});