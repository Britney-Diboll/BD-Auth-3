let app = angular.module('myApp', ['ngRoute']);

app.config(function () {
  $routeProvider
  .when("/", {
      templateUrl: "index.html",
  })
  .when("/index", {
      templateUrl: "index.html",
  })
  .when("/landing", {
      templateUrl: "landing.html",
  })


})
.controller('myCtrl', function ($scope) {

  netlifyIdentity.on('init', () => {
    initUser = netlifyIdentity.currentUser();
    console.log(initUser);
  });
  
  
  
  netlifyIdentity.on('login', () => {
    if (initUser == null) {
        window.location.replace('#!landing');
    }
    netlifyIdentity.close();
  });
  
  netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    window.location.replace('/');
  });


});

