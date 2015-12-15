angular.module('reLinked.users', [])

.controller('UsersController', function($scope, UserFactory){
  $scope.users = [];

  var getUsers = function(){
    UserFactory.getUsers()
      .then(function(data){
        $scope.users = data;
      })
      .catch(function(err){
        console.error(err);
      });
  };

  $scope.getUsers();
});
