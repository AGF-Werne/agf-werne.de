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
                template: '<agf-home></agf-home>'
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
                template: '<agf-legal></agf-legal>'
            })
            .when('/statutes', {
                template: '<statutes></statutes>'
            })
            .when('/classes', {
                template: '<classes></classes>'
            })
            .when('/care', {
                template: '<care></care>'
            })
            .when('/cafe', {
                template: '<cafe></cafe>'
            })
            .when('/garage', {
                template: '<garage></garage>'
            })
            .otherwise({
                redirectTo: '/'
            });

        return true;
    }
})(angular);
