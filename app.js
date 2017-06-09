var express = require('express');
var userController = require('./controller/userController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
userController(app);

//listen port
app.listen(3000);
console.log('You are listening port 3000');
