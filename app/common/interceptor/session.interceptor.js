_emt.factory('SessionInterceptor', ['SessionService', 'SPI_SERVICE_FLAG',
    function(SessionService, SPI_SERVICE_FLAG){
        /**
         * 判断是否为内部SPI Service调用
         * @param  {Object}  config
         * @return {Boolean} 内部SPI Service调用的场合返回true
         */
        function _isSPIService(config) {
            return config.isSPIServiceFlag === SPI_SERVICE_FLAG;
        }

        var sessionInterceptor = {
            'request': function(config){
                // 内部Service调用的场合
                if (_isSPIService(config)) {
                    // SPI使用Token-Base验证
                    if (SessionService.getToken() !== null) {
                        config.headers.TOKEN = SessionService.getToken();
                    }
                }
                return config;
            },

            'response': function(response){
                var token = response.headers('token');
                // 存储内部Service执行后返回的Token
                if (_isSPIService(response.config)) {
                    if (token !== null) {
                        SessionService.setToken(token);
                    }
                }
                return response;
            }
        };
        return sessionInterceptor;
    }
]);
