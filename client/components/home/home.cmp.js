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

        return init();

        function init () {
            var mode = __env.mode;
            var nav = __env[mode].navigation.main;

            vm.nav = nav;

            return true;
        }
    }
})(angular);
