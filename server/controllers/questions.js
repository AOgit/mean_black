console.log('questions controller');

var mongoose = require('mongoose');

var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
// var Comment = mongoose.model('Comment');

function QuestionsController(){

	this.index = function(req, res) {

		Question.find({}, function(err, questions){
			if (err) {
				console.log("loading unsuccessful");
			} else {
				console.log("success");
				res.json(questions);
			}
		})
	}

	this.getOne = function(req, res) {

		Question.find({_id: req.params.id}).populate("_answers").exec(function(err, question){
			if (err) {
				console.log("fail");
			} else {
				console.log("success");
				res.json(question);
			}
		})

	}

	this.create = function (req, res) {

		var query = new Question({q_text: req.body.q_text, q_desc: req.body.q_desc});

		query.save(function(err){
			if(err) {
				console.log(err);
				res.json({errors: "Question is required and must be at least 10 characters."});
			} else {
				console.log("successful");
				res.json(query);
			}
		});
	}

	this.makeAnswer = function (req, res) {

		Question.findOne({_id: req.body.q_id}, function(err, question) {
			console.log(question);
			var answer = new Answer({author: req.body.author, a_text: req.body.a_text, a_support: req.body.a_support, likes: 0})
			console.log(answer);
			answer._question = question._id;
			question._answers.push(answer);
			answer.save(function(err){
				if (err) {
					console.log("something went wrong");
					res.json({errors: "Answer required and must be at least 5 characters."})
				} else {
					question.save(function(err){
						if (err) { console.log("something went wrong") }
						else { 
							console.log("saving was successful")
							res.json(question);
						 };
					});
				}
			})
		})

	}

	this.giveAnswerLike = function (req, res) {

		Answer.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
			if (err) {
				console.log("the liking went wrong");
			} else {
				console.log("liking successful");
			}
		})

	}

	// this.index = function(req, res) {
	// 	Topic.find().sort({createdAt: -1}).populate("_user").exec(function(err, topics){
	// 		if (err) {
	// 			console.log("loading all topics went wrong");
	// 		} else {
	// 			console.log("loading successful");
	// 			console.log(topics);
	// 			res.json(topics);
	// 		}
	// 	})
	// }

	// this.create = function(req, res) {
	// 	User.findOne({_id: req.body._id}, function(err, user) {
	// 		console.log(user);
	// 		var topic = new Topic({topic_name: req.body.topic_name, topic_desc: req.body.topic_desc, category: req.body.category})
	// 		console.log(topic);
	// 		topic._user = user._id;
	// 		user._topics.push(topic);
	// 		topic.save(function(err){
	// 			if (err) {
	// 				console.log("something went wrong");
	// 			} else {
	// 				user.save(function(err){
	// 					if (err) { console.log("something went wrong") }
	// 					else { console.log("saving was successful") };
	// 				});
	// 			}
	// 		})

	// 	})
	// }
  
	// this.get = function(req, res) {
	// 	Topic.findOne({_id: req.params.id}).populate("_user").populate("_answers").exec(function(err, topic){
	// 		if (err) {
	// 			console.log("getting topic went wrong");
	// 		} else {
	// 			console.log("getting successful");
	// 			res.json(topic);
	// 		}
	// 	})
	// }

	// this.createAnswer = function(req, res) {

	// 	var answer = new Answer({name: req.body.name, text: req.body.text, likes: 0, dislikes: 0})

	// 	Topic.findOne({_id: req.body._id}, function(err, topic){
	// 		console.log(topic);
	// 		console.log(answer);
	// 		answer._topic = topic._id;
	// 		topic._answers.push(answer);
	// 		answer.save(function(err){
	// 			if (err) {
	// 				console.log("something went wrong")
	// 			} else {
	// 				topic.save(function(err){
	// 					if (err) { console.log("something went wrong") }
	// 					else { console.log("saving was successful") };
	// 				})
	// 			}
	// 		})
	// 	})

	// 	User.findOne({name: req.body.name}, function(err, user){
	// 		console.log(user);
	// 		console.log(answer);
	// 		answer._user = user._id;
	// 		user._answers.push(answer);
	// 		answer.save(function(err){
	// 			if (err) {
	// 				console.log("something went wrong")
	// 			} else {
	// 				user.save(function(err){
	// 					if (err) { console.log("something went wrong") }
	// 					else { console.log("saving was successful") };
	// 				})
	// 			}
	// 		})
	// 	})
	// }

	// this.getAnswers = function(req, res) {

	// 	Answer.find({_topic: req.params.id}).sort({createdAt: -1}).populate("_comments").exec(function(err, answers) {
	// 		if (err) {
	// 			console.log("something went wrong with the loading of answers");
	// 		} else {
	// 			console.log("loading answers successful");
	// 			res.json(answers);
	// 		}
	// 	})
	// }

	// this.makeComment = function(req, res) {

	// 	var comment = new Comment({name: req.body.name, text: req.body.text})

	// 	Answer.findOne({_id: req.body._id}, function(err, answer){
	// 		console.log(answer);
	// 		console.log(comment);
	// 		comment._answer = answer._id;
	// 		answer._comments.push(comment);
	// 		comment.save(function(err){
	// 			if (err) {
	// 				console.log("something went wrong")
	// 			} else {
	// 				answer.save(function(err){
	// 					if (err) { console.log("something went wrong") }
	// 					else { console.log("saving was successful") };
	// 				})
	// 			}
	// 		})
	// 	})

	// 	User.findOne({name: req.body.name}, function(err, user){
	// 		console.log(user);
	// 		console.log(comment);
	// 		comment._user = user._id;
	// 		user._comments.push(comment);
	// 		comment.save(function(err){
	// 			if (err) {
	// 				console.log("something went wrong")
	// 			} else {
	// 				user.save(function(err){
	// 					if (err) { console.log("something went wrong") }
	// 					else { console.log("saving was successful") };
	// 				})
	// 			}
	// 		})
	// 	})
	// }

	// this.addLike = function(req, res) {

	// 	Answer.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
	// 		if (err) {
	// 			console.log("the liking went wrong");
	// 		} else {
	// 			console.log("liking successful");
	// 		}
	// 	})
	// }

	// this.addDislike = function(req, res) {

	// 	Answer.update({_id: req.params.id}, {$inc: {dislikes: 1}}, function(err){
	// 		if (err) {
	// 			console.log("the disliking went wrong");
	// 		} else {
	// 			console.log("disliking successful");
	// 		}
	// 	})
	// }

}

module.exports = new QuestionsController();