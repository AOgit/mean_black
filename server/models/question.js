console.log('question model');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
	q_text: {type: String, required: true, minlength: 10}, 
	q_desc: String,
	_answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, { timestamps: true });

var Question = mongoose.model('Question', questionSchema);