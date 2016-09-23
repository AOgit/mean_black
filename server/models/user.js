console.log('user model');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	user_name: String
}, { timestamps: true })

var User = mongoose.model('User', userSchema);