angular.module('reLinked.profile', [])

.controller('ProfileController', function($scope, ProfileFactory, Profile){
  $scope.user = Profile.profileData;
  $scope.editMode = false;
  $scope.toggleEditMode = function(){
    $scope.editMode = $scope.editMode === false ? true : false;
  };
  $scope.saveProfile = function(data){
    console.log('User data: ', data);
  }
});
