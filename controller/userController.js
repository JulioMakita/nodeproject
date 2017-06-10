var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user');

//Create a Schema
var userSchema = new mongoose.Schema({
  name : String,
  age : Number,
  email: String
});

var User = mongoose.model('User', userSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

  app.get('/', function(req, res){

    //get data from the mongodb and pass it to the view
    User.find({}, function(err, data){
      if(err) throw err;
      res.render('user', {users: data});
    });
  });

  app.post('/user', urlencodedParser, function(req, res){
    //get data from the view and add  it to mongodb
    var newUser = User(req.body).save(function(err, data){
      console.log(req.body);
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/user/:id', function(req, res){
    console.log(req.params.id);
    //delete the requested item from mongodb
    User.find({_id: req.params.id}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });
};
