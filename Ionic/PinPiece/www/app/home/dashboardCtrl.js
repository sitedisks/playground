(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$state',
        function($scope, $state){

            $scope.map = null;

            $scope.init = init;
            $scope.newPost = newPost;

            function init(){
                //Try loading the map every 100ms until it works.
                var interval = setInterval(function(){
                    try{
                        $scope.map = new Microsoft.Maps.Map(document.getElementById('mapDiv'), {
                            credentials: 'AqlUSI0HFVVtDNrRHti87vFyhCeL34H4hOflM_xKWx4FeLIAROakEXwK0K4z3Pt6'
                        });
                        clearInterval(interval);
                    }catch(e){
                    }
                }, 100);
            }
            
            function newPost(){

                $state.go('app.addpost');
            }

        }]);

})();