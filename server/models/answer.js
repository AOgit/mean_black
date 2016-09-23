console.log('answer model');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var answerSchema = new mongoose.Schema({
	author: String,
	a_text: {type: String, required: true, minlength: 5}, 
	a_support: String,
	likes: Number, 
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}
}, { timestamps: true });

var Answer = mongoose.model('Answer', answerSchema);