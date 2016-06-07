/**
 * @file classes.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('classes', {
            templateUrl: 'components/classes/classes.html',
            controller: controller
        });

    /**
     * @namespace classes
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
