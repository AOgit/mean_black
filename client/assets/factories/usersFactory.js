console.log('usersFactory');

app.factory('usersFactory', ['$http', function($http){

	var user = [];

	function UsersFactory(){

		var _this = this;

		this.login = function(newUser, callback){
			$http.post('/register', newUser).then(function(returned_data){
				console.log(returned_data.data);
				user = returned_data.data;
        		if (typeof(callback) == 'function'){
          			callback(user);
        		}
        	});
		};

		this.getUser = function(callback){
			callback(user);
		}

		return _this;

	}

console.log(new UsersFactory());
return new UsersFactory();

}])

// app.factory('usersFactory', function($http) {
// 	var factory = {};

// 	factory.create = function(newUser, callback) {
// 			$http.post('/register', newUser).then(function(returned_data){
// 				console.log(returned_data.data);
// 				user = returned_data.data;
//         		if (typeof(callback) == 'function'){
//           			callback(returned_data.data);
//         		}
//         	});
// 	}
// 	factory.login = function(possibleUser, callback) {
// 			$http.post('/login', possibleUser).then(function(returned_data){
// 				console.log(returned_data.data);
// 				user = returned_data.data;
// 				console.log(user);
//         		callback(user);
// 			});
// 	}

// 	return factory;
// })