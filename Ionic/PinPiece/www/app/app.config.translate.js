(function () {
    'use strict';

    pinpieceApp.config(['$translateProvider',
        function ($translateProvider) {

            $translateProvider
                .translations('en', {
                    "TEXT_PINPIECE": "PinPiece"
                });

            $translateProvider.useStaticFilesLoader({
                'prefix': 'data/locale-',
                'suffix': '.json'
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.forceAsyncReload(true);
            $translateProvider.useSanitizeValueStrategy('escape');
        }]);
})();