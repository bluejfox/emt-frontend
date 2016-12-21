_emt.controller('EMTController', ['$scope', '$mdSidenav', 'SessionService',
    function($scope, $mdSidenav, SessionService){
        var ctrl = this;
        ctrl.isLogOn = false;

        $scope.$on('$routeChangeSuccess', function (event, current, previous) {
            ctrl.pageName = current.$$route.title;
        });
        $scope.$on('authSuccess', function(event){
            ctrl.isLogOn = true;
            console.log(SessionService.getUserInfo());
        });
        ctrl.openMenu = function(){
            $mdSidenav('left').toggle();
        };
    }
]);
