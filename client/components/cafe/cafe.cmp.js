/**
 * @file cafe.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('cafe', {
            templateUrl: 'components/cafe/cafe.html',
            controller: controller
        });

    /**
     * @namespace cafe
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
