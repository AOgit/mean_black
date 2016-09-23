console.log("qnaFactory");

app.factory('qnaFactory', ['$http', function($http) {

	var questions = [];
	var answers =[];

	function QNAFactory() {

		var _this = this;

		this.getQueries = function(callback) {
			$http.get('/questions').then(function(returned_data){
	        	console.log(returned_data.data);
	        	questions = returned_data.data;
	        	callback(questions);
      		});
		}

		this.getQuery = function(id, callback) {
			$http.get('/question/' + id).then(function(returned_data){
				callback(returned_data.data);
			})
		}

		this.makeQuery = function(theQuery, callback) {
			$http.post('/question', theQuery).then(function(returned_data){
				console.log(returned_data.data);
				callback(returned_data.data)
			});
		}

		this.giveRes = function(theAns, callback) {
			$http.post('/answer', theAns).then(function(returned_data){
				console.log(returned_data.data);
				callback(returned_data.data)
			});
		}

		this.addLike = function(id, callback) {
			$http.put('/like/' + id).then(function(returned_data){
				callback(returned_data.data);
			})
		}

		return _this;

	}

  console.log(new QNAFactory());
  return new QNAFactory();

}]);