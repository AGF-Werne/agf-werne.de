/**
 * @file agf-about.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfAbout', {
            templateUrl: 'components/agf-about/agf-about.html',
            controller: controller
        });

    /**
     * @namespace agfAbout
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
