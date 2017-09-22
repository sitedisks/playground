(function(){
    'use strict';

    pinpieceApp.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
      
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'app/menu.html',
          controller: 'AppCtrl'
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