/**
 * @file home.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('home', {
            templateUrl: 'components/home/home.html',
            controller: controller
        });

    /**
     * @namespace home
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        console.log(__env.mode);

        return true;
    }
})(angular);
