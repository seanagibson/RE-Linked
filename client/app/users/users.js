angular.module('reLinked.users', [])

.controller('UsersController', function($scope, $location, UserFactory, Profile){
  $scope.users = [];

  $scope.fetchUsers = function(){
    UserFactory.getUsers()
      .then(function(data){
        $scope.users = data;
      })
      .catch(function(err){
        console.error(err);
      });
  };

  $scope.getUserProfile = function(user){
    Profile.profileData = user;
    $location.path('/profile');
  }

  $scope.fetchUsers();
});
