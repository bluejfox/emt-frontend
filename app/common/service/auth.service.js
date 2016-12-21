_emt.factory('AuthService', ['$mdToast', '$emSpi', 'SessionService',
    function($mdToast, $emSpi, SessionService){
        function auth(userName ,password, callback){
            console.log(userName, password);
            $emSpi.post('/EMWS00001', [userName, password]).then(function(response){
                SessionService.setUserInfo(response.res);
                callback(true);
            }, function(response){
                var simple = $mdToast.simple()
                                .textContent(response.res.exceptions[0].message)
                                .position('right')
                                .hideDelay(3000);
                $mdToast.show(simple);
            });
        }

        function logOff(){
            SessionService.clear();
        }

        return {
            'auth': auth,
            'logOff': logOff
        };
    }
]);
