angular.module('reLinked', [
  'reLinked.services',
  'reLinked.auth',
  'reLinked.profile',
  'reLinked.users',
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
    .when('/users', {
      templateUrl: '/app/users/users.html',
      controller: 'UsersController'
    })
    .otherwise({
      redirectTo: '/users'
    });
});

// .directive("contenteditable", function() {
//   return {
//     restrict: "A",
//     require: "ngModel",
//     link: function(scope, element, attrs, ngModel) {
//
//       function read() {
//         ngModel.$setViewValue(element.html());
//       }
//
//       ngModel.$render = function() {
//         element.html(ngModel.$viewValue || "");
//       };
//
//       element.bind("blur keyup change", function() {
//         scope.$apply(read);
//       });
//     }
//   };
// });
