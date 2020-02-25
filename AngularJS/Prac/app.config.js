app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('_');
        $routeProvider
            .when('/add', {
                templateUrl: '/component/add/add.html',
                controller: 'componentAddCtrl'
            })
            .when('/show', {
                templateUrl: '/component/show/show.html',
                controller: 'componentShowCtrl'
            })
            .otherwise({

            });
    }]);