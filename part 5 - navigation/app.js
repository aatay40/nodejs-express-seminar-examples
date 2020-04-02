/*
  This is a very basic server running with Express

  Run : npm start

*/
const express = require('express');
const chalk = require('chalk'); 
const debug = require('debug')('app'); 
const morgan = require('morgan'); 
const path = require('path'); // add Path package for handling full path problems

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

/*
app.get('/', function(req, res) {
    res.render('index-template-storystrap', { list: ['a', 'b'], title: 'Library'})
});
*/

/* Version 1 */
app.get('/', function(req, res) {
    res.render(
        'index-template-storystrap', 
        { 
            nav: [{link:'/books', title:'Books'}, 
                  {link:'/authors', title:'Authors'}], 
            title: 'Library'
        }
    );
});

app.listen(port, function() {
    debug(`Listening on port ${chalk.green(port)}`); // debug
});