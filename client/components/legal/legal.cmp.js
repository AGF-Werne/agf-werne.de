/**
 * @file legal.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('legal', {
            templateUrl: 'components/legal/legal.html',
            controller: controller
        });

    /**
     * @namespace legal
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
