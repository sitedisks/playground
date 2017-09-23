angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicHistory, $state, $timeout) {
  // Perform the Logout action when the user submits the Logout form
  $scope.doLogout = function() {
    // hide the button back
    $ionicHistory.nextViewOptions({
        //disableAnimate: true,
        disableBack: true
    });
    // Change view to Login
    $state.go('login');

    setTimeout(function () {
        $ionicHistory.clearHistory();
    });
  };
})

.controller('LoginCtrl', function($scope, $ionicHistory, $state, $timeout) {

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login');
    // hide the button back
    $ionicHistory.nextViewOptions({
        //disableAnimate: true,
        disableBack: true
    });
    // Change view to feeds
    $state.go('app.feeds');

    setTimeout(function () {
        $ionicHistory.clearHistory();
    });
  };
})

.controller('RegisterCtrl', function($scope, $ionicHistory, $state, $timeout) {

  // Perform the Register action when the user submits the Register form
  $scope.doRegister = function() {
    console.log('Doing Register');
    // hide the button back
    $ionicHistory.nextViewOptions({
        //disableAnimate: true,
        disableBack: true
    });
    // Change view to feeds
    $state.go('app.feeds');

    setTimeout(function () {
        $ionicHistory.clearHistory();
    });
  };
})

.controller('FeedsCtrl', function($scope) {
})

.controller('FeedCtrl', function($scope, $stateParams) {
})

.controller('MenuActiveCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});