angular.module('reLinked.auth', [])

.controller('AuthController', function($scope, $location ,Auth){
  $scope.user = {};

  $scope.signup = function(){
    Auth.signup($scope.user)
      .then(function(){
        $location.path('/profile');
      })
      .catch(function(err){
        console.error(err);
      });
  };

  $scope.login = function(){
    Auth.login($scope.user)
      .then(function(){
        $location.path('/profile');
      })
      .catch(function(err){
        console.error(err);
      });
  };

});
