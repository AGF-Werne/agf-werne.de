/**
 * @file agf.cfg.js
 * @namespace Configs
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .config(config);

    /**
     * @namespace agf
     * @memberof Configs
     * @requires $routeProvider
     * @returns {Boolean}
     */
    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .when('/about', {
                template: '<about></about>'
            })
            .otherwise({
                redirectTo: '/'
            });

        return true;
    }
})(angular);
