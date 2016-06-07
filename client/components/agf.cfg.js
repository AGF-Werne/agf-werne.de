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
    function config ($sceProvider, $routeProvider) {
        $sceProvider.enabled(false);

        $routeProvider
            .when('/', {
                template: '<home></home>'
            })
            .when('/about', {
                template: '<about></about>'
            })
            .when('/projects', {
                template: '<projects></projects>'
            })
            .when('/contact', {
                template: '<contact></contact>'
            })
            .when('/legal', {
                template: '<legal></legal>'
            })
            .when('/statutes', {
                template: '<statutes></statutes>'
            })
            .otherwise({
                redirectTo: '/'
            });

        return true;
    }
})(angular);
