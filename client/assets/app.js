var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {

	$routeProvider
	    .when('/dashboard', {
	    	templateUrl: 'partials/dashboard.html'
	    })
	    .when('/login', {
	    	templateUrl: 'partials/login.html'
	    })
	    .when('/new_question', {
	    	templateUrl: 'partials/new_question.html'
	    })
	    .when('/question/:id', {
	    	templateUrl: 'partials/question.html'
	    })
	    .when('/question/:id/new_answer', {
	    	templateUrl: 'partials/answer.html'
	    })
	    .otherwise({
	    	redirectTo: '/login'
	    })

});