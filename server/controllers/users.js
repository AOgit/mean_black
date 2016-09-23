console.log('users controller');

var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  
  this.create = function(req,res){
    
    var user = new User({user_name: req.body.name});

    user.save(function(err){
      if (err) {
        console.log("something went wrong");
      } else {
        console.log('successful');
        res.json(user);
      }
    }) 
  };

  // this.get = function(req, res){

  //   User.find({_id: req.params.id}, function(err, user){
  //     if (err) {
  //       console.log("something went wrong with user loading");
  //     } else {
  //       console.log("successful");
  //       res.json(user);
  //     }
  //   })
  // }

}

module.exports = new UsersController(); // what does this export?



