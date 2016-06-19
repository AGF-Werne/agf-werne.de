/**
 * @file agf-projects.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfProjects', {
            templateUrl: 'components/agf-projects/agf-projects.html',
            controller: controller
        });

    /**
     * @namespace agfProjects
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

            if ($location.search().cafe) {
                console.log('cafe');
            }
            else if ($location.search().care) {
                console.log('care');
            }
            else if ($location.search().garage) {
                console.log('garage');
            }

            return true;
        }
    }
})(angular);
