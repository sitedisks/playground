(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$state',
        function($scope, $state){

            $scope.newPost = newPost;

            function newPost(){

                $state.go('app.addpost');
            }

        }]);

})();