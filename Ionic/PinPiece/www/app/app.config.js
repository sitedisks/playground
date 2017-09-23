(function(){
    'use strict';

    pinpieceApp.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
      
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/menu.html',
          controller: 'appCtrl'
        })
 
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
              templateUrl: 'app/home/post.html',
              controller: 'postCtrl'

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


        .state('app.search', {
          url: '/search',
          views: {
            'menuContent': {
              templateUrl: 'app/search.html'
            }
          }
        })
      
        .state('app.browse', {
            url: '/browse',
            views: {
              'menuContent': {
                templateUrl: 'app/browse.html'
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
        $urlRouterProvider.otherwise('/app/playlists');
      });
})();