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
     * @requires $location
     * @returns {Boolean}
     */
    function controller (__env, $location) {
        var vm = this;

        return init();

        function init () {
            var mode = __env.mode;
            var nav = __env[mode].navigation.main;

            vm.nav = nav;

            if ($location.search().workintegration) {
                vm.content = 'components/agf-projects/agf-projects-workintegration.html';
            }
            else if ($location.search().womancafe) {
                vm.content = 'components/agf-projects/agf-projects-womancafe.html';
            }
            else if ($location.search().womanclasses) {
                vm.content = 'components/agf-projects/agf-projects-womanclasses.html';
            }
            else if ($location.search().garage) {
                vm.content = 'components/agf-projects/agf-projects-garage.html';
            }
            else if ($location.search().classes) {
                vm.content = 'components/agf-projects/agf-projects-classes.html';
            }
            else {
                vm.content = 'components/agf-projects/agf-projects-index.html';
            }

            return true;
        }
    }
})(angular);
