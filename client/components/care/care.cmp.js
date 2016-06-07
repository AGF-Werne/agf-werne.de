/**
 * @file care.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('care', {
            templateUrl: 'components/care/care.html',
            controller: controller
        });

    /**
     * @namespace care
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
