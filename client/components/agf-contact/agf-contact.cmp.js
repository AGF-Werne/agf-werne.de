/**
 * @file agf-contact.cmp.js
 * @namespace Components
 */

/* global angular L */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfContact', {
            templateUrl: 'components/agf-contact/agf-contact.html',
            controller: controller
        });

    /**
     * @namespace agfContact
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env, $timeout) {
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
