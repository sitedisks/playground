// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.text("");
  $ionicConfigProvider.navBar.alignTitle("center");
  
  $stateProvider

    .state('login', {
      cache: false,
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })
    
    .state('register', {
      cache: false,
      url: "/register",
      templateUrl: "templates/register.html",
      controller: 'RegisterCtrl'
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.friends', {
    url: '/friends',
    views: {
      'menuContent': {
        templateUrl: 'templates/friends.html'
      }
    }
  })

  .state('app.favorites', {
      url: '/favorites',
      views: {
        'menuContent': {
          templateUrl: 'templates/favorites.html'
        }
      }
    })
    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })
    .state('app.edprofile', {
        url: '/profile/:profileID',
        views: {
            'menuContent': {
                templateUrl: 'templates/editProfile.html'
            }
        }
    })
    .state('app.feeds', {
      url: '/feeds',
      views: {
        'menuContent': {
          templateUrl: 'templates/feeds.html',
          controller: 'FeedsCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/feeds/:feedId',
    views: {
      'menuContent': {
        templateUrl: 'templates/feed.html',
        controller: 'FeedCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
