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
    function controller (__env, $location) {
        var vm = this;

        return init();

        function init () {
            var mode = __env.mode;
            var nav = __env[mode].navigation.main;

            vm.nav = nav;
            vm.onClick = onClick;

            return true;
        }

        function onClick (destination) {
            return $location.path(destination);
        }
    }
})(angular);
