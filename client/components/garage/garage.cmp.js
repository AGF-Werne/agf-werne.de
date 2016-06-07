/**
 * @file garage.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('garage', {
            templateUrl: 'components/garage/garage.html',
            controller: controller
        });

    /**
     * @namespace garage
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
