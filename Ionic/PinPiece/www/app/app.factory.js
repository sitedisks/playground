(function(){
    'use strict';

    pinpieceApp.factory('pinpieceFactory', ['$http', 'KEYCHAIN', 'RESTSERVICES',
        function($http, KEYCHAIN, RESTSERVICES){
            var pinpieceFactory = {
                geolocationReverse: geolocationReverse
            };

            return pinpieceFactory;

                   // services
            function geolocationReverse(coords) {
                    var params = coords.latitude + ',' + coords.longitude;
                    return $http({
                        type: 'GET',
                        url: RESTSERVICES.virtualearth + 'v1/Locations/' 
                            + params + '?o=json&key=' + KEYCHAIN.bingMapKey,           
                        datatype: 'json',
                        contentType: 'application/json;charset=utf-8'
                    });
                }

        }]);

})();