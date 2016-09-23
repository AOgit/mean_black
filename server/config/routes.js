console.log('routes');
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.post('/register', users.create);
  app.post('/question', questions.create);
  app.get('/questions', questions.index)
  app.get('/question/:id', questions.getOne);
  app.post('/answer', questions.makeAnswer);
  app.put('/like/:id', questions.giveAnswerLike);
  // app.get('/answers/:id', topics.getAnswers);
  // app.post('/comment', topics.makeComment);
  // app.post('/answer_like/:id', topics.addLike);
  // app.post('/answer_dislike/:id', topics.addDislike);
}