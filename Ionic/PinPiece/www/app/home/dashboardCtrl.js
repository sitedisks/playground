(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$state', '$cordovaGeolocation',
        function($scope, $state, $cordovaGeolocation){

            var searchManager;
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
                        reverseGeocode();
                        clearInterval(interval);
                    }catch(e){
                    }
                }, 100);
            }
            
            function newPost(){

                $state.go('app.addpost');
            }

            function reverseGeocode() {
                //If search manager is not defined, load the search module.
                if (!searchManager) {
                    //Create an instance of the search manager and call the reverseGeocode function again.
                    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
                        searchManager = new Microsoft.Maps.Search.SearchManager($scope.map);
                        reverseGeocode();
                    });
                } else {
                    var searchRequest = {
                        location: $scope.map.getCenter(),
                        callback: function (r) {
                            //Tell the user the name of the result.
                            alert(r.name);
                        },
                        errorCallback: function (e) {
                            //If there is an error, alert the user about it.
                            alert("Unable to reverse geocode location.");
                        }
                    };
        
                    //Make the reverse geocode request.
                    searchManager.reverseGeocode(searchRequest);
                }
            }

        }]);

})();