_emt.controller('EMTController', ['$location', '$scope', '$mdSidenav', 'AuthService', 'MenuService', 'SessionService',
    function($location, $scope, $mdSidenav, AuthService, MenuService, SessionService){
        var ctrl = this;
        ctrl.isLogOn = false;
        ctrl.menu = {};
        ctrl.menu.sections = [
            {
                'name': 'Menu',
                'type': 'heading',
                'children': [
                    {
                        'name': 'Menu1',
                        'type': 'toggle',
                        'pages': [
                            {
                                'name': 'Menu1-A',
                                'id': 'Menu1-A',
                                'url': '#'
                            }
                        ]
                    }
                ]
            }
        ];

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

        ctrl.toggleOpen = function(section) {
            MenuService.toggleSelectSection(section);
        };

        ctrl.isOpen = function(section) {
            return MenuService.isSectionSelected(section);
        };

        ctrl.isSelected = function(page) {
            return MenuService.isPageSelected(page);
        };

        ctrl.logOff = function(){
            ctrl.isLogOn = false;
            AuthService.logOff();
            $location.path('login');
        };
    }
]);
