_emt.component('emtLogin', {
    templateUrl: 'login/login.template.html',
    bindings: {
    },
    controller: ['$location', '$scope', 'AuthService', function($location, $scope, AuthService){
        var self = this;
        self.login = function(){
            AuthService.auth(self.username, self.password, function(result){
                $scope.$emit('authSuccess', result);
                // 跳转至首页
                $location.path('dashboard');
            });
        };
    }]
});
