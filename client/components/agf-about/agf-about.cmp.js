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
    function controller (__env, $location) {
        var vm = this;

        return init();

        function init () {
            var mode = __env.mode;
            var nav = __env[mode].navigation.main;

            vm.nav = nav;
            vm.onClick = onClick;

            if ($location.search().statute) {
                vm.content = 'components/agf-about/agf-about-statue.html';
            }
            else if ($location.search().structure) {
                vm.content = 'components/agf-about/agf-about-structure.html';

            }
            else {
                vm.content = 'components/agf-about/agf-about-history.html';
            }

            return true;
        }

        function onClick (nr) {
            console.log(nr);
        }
    }
})(angular);
