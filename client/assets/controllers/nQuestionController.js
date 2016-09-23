console.log("New Question Controller")
app.controller('nQuestionController', ['$scope', '$location', 'qnaFactory', function($scope, $location, qnaFactory) {

  $scope.newQuery = {};
  $scope.error = null;

  $scope.postQuery = function(){
    qnaFactory.makeQuery($scope.newQuery, function(data){
      if (data.errors) {
        $scope.error = data
      } 
      else if (data.q_text) {
        $location.path('/dashboard')
      }
    })
  }

}]);