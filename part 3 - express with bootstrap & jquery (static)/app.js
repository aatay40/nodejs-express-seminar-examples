/*
  This is a very basic server running with Express
  1- create public directory and copy bootstrap, jquery files from node_modules respectively (download or install with npm)
  2- use node_modules directory to prevent copying
  
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

// Version 3
app.use(express.static(path.join(__dirname, '/public')));

// Version 4
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.get('/', function(req, res) {
    // res.send("Hello from my library app");

    // Version 1
    // res.sendFile(__dirname + 'views/index.html',""); // !! add Path package
    
    // Version 2
    res.sendFile(path.join(__dirname , 'views/index.html'));
});

app.listen(3000, function() {
    debug(`Listening on port ${chalk.green('3000')}`); // debug
});