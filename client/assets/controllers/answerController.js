console.log("Answer Controller")
app.controller('answerController', ['$scope', '$location', '$routeParams', 'qnaFactory', 'usersFactory', function($scope, $location, $routeParams, qnaFactory, usersFactory) {

  $scope.user = [];
  $scope.question = [];
  $scope.error = null;

  var carrot = function(){
    qnaFactory.getQuery($routeParams.id, function(data){
      $scope.question = data[0];
    })
  }

  carrot();

  var dog = function(){
    usersFactory.getUser(function(data){
      console.log(data);
      $scope.user = data;
    })
  }

  dog();

  console.log($scope.user);

  $scope.newAnswer = {};

  $scope.giveAns = function(){
    $scope.newAnswer.author = $scope.user.user_name;
    $scope.newAnswer.q_id = $routeParams.id;
    qnaFactory.giveRes($scope.newAnswer, function(data){
      if (data.errors) {
        $scope.error = data
      } 
      else {
        $location.path('/dashboard')
      }
    })
  }

}]);