angular.module('reLinked.services', [])

.factory('Auth', function($http, $location){
  var login = function(user){
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    })
    .then(function(res){
      return res.data;
    });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    })
    .then(function(res){

    });
  };

  return {
    login: login,
    signup: signup
  };
})

.factory('ProfileFactory', function($http){
  var getProfile = function(user){
    return $http({
      method: 'GET',
      url: '/profile/?id=' + id,
    })
    .then(function(res){
      return res.data;
    });
  };

  var editProfile = function(userData){
    return $http({
      method: 'POST',
      url: '/profile/?id=' + userData.id,
      data: userData
    })
    .then(function(res){

    });
  };

  return {
    getProfile: getProfile,
    editProfile: editProfile
  };
})

.factory('Profile', function(){
  var profileData = {};

  return {profileData: profileData};
})

.factory('UserFactory', function($http){
  var getUsers = function(){
    return $http({
      method: 'GET',
      url: '/users',
    })
    .then(function(res){
      return res.data;
    });
  };

  return{
    getUsers: getUsers
  };
})
