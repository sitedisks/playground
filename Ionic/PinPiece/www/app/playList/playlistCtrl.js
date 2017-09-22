(function(){
    'use strict';

    pinpieceCtrl.controller('playlistCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams){

            $scope.itemId = $stateParams.itemId;

        }]);

})();