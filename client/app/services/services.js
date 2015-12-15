angular.module('reLinked.services', [])

.factory('Auth', function($http, $location){
  var login = function(user){
    return $http({
      method: 'POST',
      url: '/login',
      data: user
    })
    .then(function(resp){
      // if(resp.status === 200){
      //   $location.path('/profile');
      // } else {
      //   $location.path('/login');
      // }
    });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    })
    .then(function(resp){
      // $location.path('/profile');
    });
  };

  return {
    login: login,
    signup: signup
  };
});
