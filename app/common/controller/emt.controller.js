_emt.controller('EMTController', ['$location', '$scope', '$mdSidenav', 'AuthService', 'SessionService',
    function($location, $scope, $mdSidenav, AuthService, SessionService){
        var ctrl = this;
        ctrl.isLogOn = false;

        $scope.$on('$routeChangeSuccess', function (event, current, previous) {
            ctrl.pageName = current.$$route.title;
        });
        $scope.$on('authSuccess', function(event){
            ctrl.isLogOn = true;
            var userInfo = SessionService.getUserInfo();
            ctrl.uid = userInfo.uid;
        });

        ctrl.openMenu = function(){
            $mdSidenav('left').toggle();
        };

        ctrl.logOff = function(){
            ctrl.isLogOn = false;
            AuthService.logOff();
            $location.path('login');
        };
    }
]);
