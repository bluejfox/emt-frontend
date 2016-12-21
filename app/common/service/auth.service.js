_emt.factory('AuthService', ['$mdToast', '$emSpi', function($mdToast, $emSpi){
    function auth(userName ,password, callback){
        console.log(userName, password);
        $emSpi.post('/EMWS00001', [userName, password]).then(function(response){
            callback(true);
        }, function(response){
            var simple = $mdToast.simple()
                            .textContent(response.res.exceptions[0].message)
                            .position('right')
                            .hideDelay(3000);
            $mdToast.show(simple);
        });
    }

    function logoff(){
    }

    return {
        'auth': auth
    };
}]);
