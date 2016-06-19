/**
 * @file agf-news.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfNews', {
            templateUrl: 'components/agf-news/agf-news.html',
            controller: controller
        });

    /**
     * @namespace agfNews
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
