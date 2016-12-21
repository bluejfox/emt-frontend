_emt.config(['$provide', '$mdThemingProvider', '$locationProvider', '$httpProvider', '$routeProvider',
    function($provide, $mdThemingProvider, $locationProvider, $httpProvider, $routeProvider) {
        // constant
        $provide.constant('SPI_SERVICE_FLAG', '_SPI_SERVICE');

        // http
        var interceptors = $httpProvider.interceptors;
        interceptors.push('SessionInterceptor');

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
            'title': '登录',
            'template': '<emt-login flex layout="column"></emt-login>'
        }).
        when('/dashboard', {
            'title': '首页',
            'template': ''
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);
