console.log("Login Controller")
app.controller('loginController', ['$scope', '$location', 'usersFactory', function($scope, $location, usersFactory) {

  $scope.login = function() {
    console.log($scope.prosUser);
    usersFactory.login($scope.prosUser);
    $location.url('/dashboard')
  }

}]);