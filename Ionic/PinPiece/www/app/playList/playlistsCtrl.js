(function(){
    'use strict';

    pinpieceCtrl.controller('playlistsCtrl', ['$scope', 
        function($scope){

            $scope.playlists = [
                { title: 'cwan40', id: 1 },
                { title: 'Chill', id: 2 },
                { title: 'Dubstep', id: 3 },
                { title: 'Indie', id: 4 },
                { title: 'Rap', id: 5 },
                { title: 'Cowbell', id: 6 }
            ];

        }]);

})();