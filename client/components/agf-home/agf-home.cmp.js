/**
 * @file agf-home.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfHome', {
            templateUrl: 'components/agf-home/agf-home.html',
            controller: controller
        });

    /**
     * @namespace agf-home
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return init();

        /**
         * @name init
         * @returns {Boolean}
         */
        function init () {
            var mode = __env.mode;
            var nav = __env[mode].navigation.main;

            vm.nav = nav;

            return true;
        }
    }
})(angular);
