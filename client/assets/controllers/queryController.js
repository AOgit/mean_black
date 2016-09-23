console.log("Query Controller")
app.controller('queryController', ['$scope', '$location', '$routeParams', 'qnaFactory', function($scope, $location, $routeParams, qnaFactory) {

  $scope.question = [];

  var eagle = function(){
    qnaFactory.getQuery($routeParams.id, function(data){
      $scope.question = data[0];
    })
  }

  eagle();

  $scope.like = function(val){
    qnaFactory.addLike(val);
    eagle();
  }

}]);