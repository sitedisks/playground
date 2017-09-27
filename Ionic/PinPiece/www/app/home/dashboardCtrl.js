(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$state', '$cordovaGeolocation',
        function($scope, $state, $cordovaGeolocation){

            $scope.map = null;
            $scope.coords = null;

            $scope.init = init;
            $scope.newPost = newPost;

            var posOptions = {timeout: 10000, enableHighAccuracy: false};
            var geolocation = $cordovaGeolocation.getCurrentPosition(posOptions);
            geolocation.then(function (position) {
                $scope.coords = position.coords;
                var lat  = position.coords.latitude
                var long = position.coords.longitude
              }, function(err) {
                // error
                console.log(err);
              });
          
          
            var watchOptions = {timeout : 3000, enableHighAccuracy: false};
            var watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(null,
              function(err) {
                // error
                console.log(err);
              },
              function(position) {
                $scope.coords = position.coords;
                var lat  = position.coords.latitude
                var long = position.coords.longitude
            });

            function init(){

                //Try loading the map every 100ms until it works.
                var interval = setInterval(function(){
                    try{
                        $scope.map = new Microsoft.Maps.Map(document.getElementById('mapDiv'), {
                            credentials: 'AqlUSI0HFVVtDNrRHti87vFyhCeL34H4hOflM_xKWx4FeLIAROakEXwK0K4z3Pt6',
                            // center: new Microsoft.Maps.Location(51.50632, -0.12714),
                            // mapTypeId: Microsoft.Maps.MapTypeId.aerial,
                            // zoom: 10
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