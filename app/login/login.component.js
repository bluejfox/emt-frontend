_emt.component('emtLogin', {
    templateUrl: 'login/login.template.html',
    bindings: {
    },
    controller: function(){
        var self = this;
        self.login = function(){
            console.log(self.username);
            console.log(self.password);
        };
    }
});
