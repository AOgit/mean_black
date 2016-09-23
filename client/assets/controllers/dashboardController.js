console.log("Dashboard Controller");
app.controller("dashboardController", ['$scope', '$location', 'usersFactory', 'qnaFactory', function($scope, $location, usersFactory, qnaFactory) {

	$scope.user =[];
  $scope.questions = [];

	var apple = function() {
    usersFactory.getUser(function(data){
      console.log(data);
      $scope.user = data;
    })
  }

  apple();

  $scope.logout = function() {
    $scope.user = [];
    $location.url('/login');
  }

  var banana = function(){
    qnaFactory.getQueries(function(data){
      console.log(data);
      $scope.questions = data;
    })
  }

  banana();

  // topicsFactory.index(function(data){
  //   $scope.topics = data;
  // })

  // $scope.createTopic = function(val) {
  //   $scope.newTopic._id = val;
  //   console.log($scope.newTopic);
  //   topicsFactory.create($scope.newTopic);
    
  //   usersFactory.getUser(function(data){
  //     $scope.user = data;
  //   })

  //   topicsFactory.index(function(data){
  //     $scope.topics = data;
  //   })
  // }

}]);