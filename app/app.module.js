(function(window, angular){
    'use strict';

    if (angular.isUndefined(window._emt)) {
        // Define the `emt` module
        window._emt = angular.module('emt', [
          'ngAnimate',
          'ngResource',
          'ngMaterial',
          'ngRoute'
        ]);
    }

}(window, angular));
