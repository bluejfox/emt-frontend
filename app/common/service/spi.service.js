_emt.factory('$emSpi', ['$http', '$q', '$mdDialog', 'SPI_SERVICE_FLAG',
    function($http, $q, $mdDialog, SPI_SERVICE_FLAG) {
        function _addFlag(config) {
            config = config || {};
            config.isSPIServiceFlag = SPI_SERVICE_FLAG;
            return config;
        }

        function defaultNetErrorHandler(response) {
            alert(response);
        }

        function defaultSuccessHandler(defered, isShowError, response) {
            if (response.status === 200) {
                if (response.data.resultCode === 1) {
                    defered.resolve({
                        'req': response.config.data,
                        'res': response.data.resultObject
                    });
                } else {
                    if (isShowError) {
                        defaultBizErrorHandler(response);
                    }
                    defered.reject({
                        'req': response.config.data,
                        'res': response.data
                    });
                }
            }
        }

        function defaultBizErrorHandler(response) {
            var alert = $mdDialog.alert({
                title: '错误',
                textContent: response.data.exceptions[0],
                ok: '关闭'
            });

            $mdDialog
                .show(alert)
                .finally(function() {
                    alert = undefined;
                });
        }

        function query(serviceId, param, config) {
            var defered = $q.defer();
            var d = $http.get(serviceId, param, _addFlag(config));
            d.then(defaultSuccessHandler.bind(undefined, defered, true), defaultNetErrorHandler).then(function(res) {
                defered.resolve(res);
            }, defaultBizErrorHandler);
            return defered.promise;
        }

        function save(serviceId, param, config) {
            return update(serviceId, param, config);
        }

        function update(serviceId, param, config) {
            var defered = $q.defer();
            var d = $http.post(serviceId, param, _addFlag(config));
            d.then(defaultSuccessHandler.bind(undefined, defered, true), defaultNetErrorHandler).then(function(res) {
                defered.resolve(res);
            }, defaultBizErrorHandler);
            return defered.promise;
        }

        function post(serviceId, param, config) {
            var defered = $q.defer();
            var d = $http.post(serviceId, param, config);
            d.then(defaultSuccessHandler.bind(undefined, defered, false), defaultNetErrorHandler);
            return defered.promise;
        }

        function get(serviceId, param, config) {
            var defered = $q.defer();
            var d = $http.get(serviceId, param, config);
            d.then(defaultSuccessHandler.bind(undefined, defered, false), defaultNetErrorHandler);
            return defered.promise;
        }

        return {
            'query': query,
            'save': save,
            'update': update,
            'post': post,
            'get': get
        };
    }
]);
