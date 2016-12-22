_emt.config(['$provide', '$mdIconProvider', '$mdThemingProvider', '$locationProvider', '$httpProvider', '$routeProvider',
    function($provide, $mdIconProvider, $mdThemingProvider, $locationProvider, $httpProvider, $routeProvider) {
        // constant
        $provide.constant('SPI_SERVICE_FLAG', '_SPI_SERVICE');

        // http
        var interceptors = $httpProvider.interceptors;
        interceptors.push('SessionInterceptor');

        // theme
        $mdThemingProvider.theme('forest')
            .primaryPalette('indigo')
            .accentPalette('brown')
            .warnPalette('red')
            .backgroundPalette('grey');

        // icon
        $mdIconProvider.icon('md-toggle-arrow', 'image/icon/toggle-arrow.svg', 48);

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
