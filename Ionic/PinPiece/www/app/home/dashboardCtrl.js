(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$http', '$state', '$ionicLoading', '$cordovaGeolocation',
        function($scope, $http, $state, $ionicLoading, $cordovaGeolocation){

            var bingKey = 'AqlUSI0HFVVtDNrRHti87vFyhCeL34H4hOflM_xKWx4FeLIAROakEXwK0K4z3Pt6';
            $scope.coords = null;
            $scope.addresses = [];

            $scope.init = init;
            $scope.newPost = newPost;

           function watchMove(){
            var watchOptions = {timeout : 3000, enableHighAccuracy: false};
            var watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(null,
              function(err) {
                // error
                console.log(err);
              },
              function(position) {
                $scope.coords = position.coords;
                var lat  = position.coords.latitude;
                var long = position.coords.longitude;
                
                fillAddresses();

            });

           }
            

            function init(){

                showLoading('location...');
                var posOptions = {timeout: 10000, enableHighAccuracy: false};
                var geolocation = $cordovaGeolocation.getCurrentPosition(posOptions);
                geolocation.then(function (position) {
                    $scope.coords = position.coords;
                    var lat  = position.coords.latitude;
                    var long = position.coords.longitude;

                    fillAddresses();

                  }, function(err) {
                    // error
                    console.log(err);
                    hideLoading();
                  });
            
            }
            
            function newPost(){
                $state.go('app.addpost');
            }

            function fillAddresses(){
                geolocationReverse($scope.coords).then(function(resp){
                    var resourceSets = resp.data.resourceSets;
                    angular.forEach(resourceSets, function(item){
                        angular.forEach(item.resources, function(add){
                            var address = add.address;
                            var name = add.name;
                            $scope.addresses.push({shortAddress: name, fullAddress: address});
                        });
                    });
                    hideLoading();
                }, function(err){
                    // error
                    console.log(err);
                    hideLoading()
                });
            }

            // services
            function geolocationReverse(coords) {
                var lat  = coords.latitude;
                var lng = coords.longitude;
                var params = lat + ',' + lng;
                return $http({
                    type: 'GET',
                    url: 'http://dev.virtualearth.net/REST/v1/Locations/' + params + '?o=json&key=' + bingKey,           
                    datatype: 'json',
                    contentType: 'application/json;charset=utf-8'
                });
            }

            function showLoading(message) {
                $ionicLoading.show({
                    template: '<ion-spinner></ion-spinner><p>' + message + '</p>'
                });
            }

            function hideLoading() {
                $ionicLoading.hide();
            }

        }]);

})();