var pinpieceCtrl = angular.module('pinpiece.controllers', []);

pinpieceCtrl.controller('appCtrl', ['$scope', '$ionicModal', '$timeout', 
  function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    $scope.closeLogin = closeLogin;
    $scope.login = login;
    $scope.doLogin = doLogin;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('app/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    function closeLogin() {
      $scope.modal.hide();
    };

    // Open the login modal
    function login() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    function doLogin() {
   
      // code if using a login system
       $scope.closeLogin();
    };
  }]);
