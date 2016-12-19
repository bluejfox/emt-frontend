_emt.config(['$mdThemingProvider', '$locationProvider', '$routeProvider',
    function($mdThemingProvider, $locationProvider, $routeProvider) {
        // theme
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '800'
            })
            .accentPalette('pink')
            .warnPalette('red')
            .backgroundPalette('grey');
        // route
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/login', {
            "template": '<emt-login flex layout="column"></emt-login>'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);
