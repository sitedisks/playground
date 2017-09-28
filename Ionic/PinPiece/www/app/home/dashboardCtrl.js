(function(){
    'use strict';

    pinpieceCtrl.controller('dashboardCtrl', ['$scope', '$state', '$ionicLoading', '$cordovaGeolocation', 'pinpieceFactory',
        function($scope, $state, $ionicLoading, $cordovaGeolocation, pinpieceFactory){

            var bingKey = 'AqlUSI0HFVVtDNrRHti87vFyhCeL34H4hOflM_xKWx4FeLIAROakEXwK0K4z3Pt6';
            $scope.coords = {
                latitude: '-37.809341811602465',
                longitude: '145.08142582185948'
            };
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
                    fillAddresses();

                  }, function(err) {
                    // error
                    console.log(err);
                    hideLoading();
                    fillAddresses();
                  });
            
            }
            
            function newPost(){
                $state.go('app.addpost');
            }

            function fillAddresses(){
                pinpieceFactory.geolocationReverse($scope.coords).then(function(resp){
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
                    hideLoading();
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