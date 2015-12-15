angular.module('reLinked', [
  'reLinked.services',
  'reLinked.auth',
  'reLinked.profile',
  'ngRoute'
])

.config(function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl: '/app/auth/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: '/app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/profile',{
      templateUrl: '/app/profile/profile.html',
      controller: 'ProfileController'
    })
    .when('/search', {
      templateUrl: '/app/search/search.html',
      controller: 'SearchController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
