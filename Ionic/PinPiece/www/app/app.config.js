(function(){
    'use strict';

    pinpieceApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
    
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/menu.html',
          controller: 'appCtrl'
        })
 
        // Home: Dashboard, Post, Me
        .state('app.home', {
          cache: false,
          url: '/home',
          abstract: true,
          views: {
            'menuContent': {
              templateUrl: 'app/home/home.html',
              controller: 'homeCtrl'
            }
          }
        })
        .state('app.home.dashboard', {
          cache: false,
          url: '/dashboard',
          views: {
              'home-dashboard': {
                  templateUrl: 'app/home/dashboard.html',
                  controller: 'dashboardCtrl'
              }
          }
        })
        .state('app.home.post', {
          cache: false,
          url: '/post',
          views: {
              'home-post': {
                  templateUrl: 'app/home/post/postList.html',
                  controller: 'postListCtrl'
              }
          }
        })
        .state('app.home.me', {
          cache: false,
          url: '/me',
          views: {
              'home-me': {
                  templateUrl: 'app/home/me.html',
                  controller: 'meCtrl'
              }
          }
        })

        .state('app.addpost', {
          cache: false,
          url: '/addpost',
          views: {
              'menuContent': {
                  templateUrl: 'app/home/post/postAdd.html',
                  controller: 'postAddCtrl'
              }
          }
        })

        .state('app.home.post.viewpost', {
          cache: false,
          url: '/viewpost',
          views: {
              'home-post@app.home': {
                  templateUrl: 'app/home/post/postView.html',
                  controller: 'postViewCtrl'
              }
          }
        })

        // Friends
        .state('app.friends', {
            url: '/friends',
            views: {
              'menuContent': {
                templateUrl: 'app/user/friends.html',
                controller: 'friendsCtrl'
              }
            }
        })

        // About
        .state('app.about', {
            url: '/about',
            views: {
              'menuContent': {
                templateUrl: 'app/about/about.html'
               
              }
            }
        })

        // Tutorial
        .state('app.tutorial', {
            url: '/tutorial',
            views: {
              'menuContent': {
                templateUrl: 'app/about/tutorial.html'
                
              }
            }
        })

        // Settings
        .state('app.settings', {
            url: '/settings',
            views: {
              'menuContent': {
                templateUrl: 'app/settings/settings.html',
                controller: 'settingsCtrl'
              }
            }
        })

        .state('app.playlists', {
            url: '/playlists',
            views: {
              'menuContent': {
                templateUrl: 'app/playList/playlists.html',
                controller: 'playlistsCtrl'
              }
            }
        })
      
        .state('app.single', {
          url: '/playlists/:itemId',
          views: {
            'menuContent': {
              templateUrl: 'app/playList/playlist.html',
              controller: 'playlistCtrl'
            }
          }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home/dashboard');
      }]);
})();