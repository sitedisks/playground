(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$state',
        function($scope, $state){

            $scope.map = null;

            $scope.init = init;
            $scope.newPost = newPost;

            function init(){

                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(function(position){
                        var dd =  "Latitude: " + position.coords.latitude +
                        "<br>Longitude: " + position.coords.longitude;
                    });
                }
                else{
                    // get

                }



                //Try loading the map every 100ms until it works.
                var interval = setInterval(function(){
                    try{
                        $scope.map = new Microsoft.Maps.Map(document.getElementById('mapDiv'), {
                            credentials: 'AqlUSI0HFVVtDNrRHti87vFyhCeL34H4hOflM_xKWx4FeLIAROakEXwK0K4z3Pt6',
                            center: new Microsoft.Maps.Location(51.50632, -0.12714),
                            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
                            zoom: 10
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