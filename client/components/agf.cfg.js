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
                template: '<AGF-about></AGF-about>'
            })
            .when('/projects', {
                template: '<agf-projects></agf-projects>'
            })
            .when('/contact', {
                template: '<agf-contact></agf-contact>'
            })
            .when('/legal', {
                template: '<agf-legal></agf-legal>'
            })
            .when('/statutes', {
                template: '<agf-statutes></agf-statutes>'
            })
            .when('/news', {
                template: '<agf-news></agf-news>'
            })
            .otherwise({
                redirectTo: '/'
            });

        return true;
    }
})(angular);
