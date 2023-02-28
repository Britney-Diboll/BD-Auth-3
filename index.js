let app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "landing.html",
    })
    .when("/landing", {
      templateUrl: "landing.html",
    })
    .when("/test", {
      templateUrl: "test.html",
    });


});

app.controller('myCtrl', function ($scope) {
  
  let initUser = netlifyIdentity.currentUser();

  netlifyIdentity.on('init', () => {
    initUser = netlifyIdentity.currentUser();

    console.log(initUser);
  });



  netlifyIdentity.on('login', () => {
    if (initUser == null) {
      window.location.replace('#!test');
    }
    netlifyIdentity.close();
  });

  netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    window.location.replace('/');
  });


});

