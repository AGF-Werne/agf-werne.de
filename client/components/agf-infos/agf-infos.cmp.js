/**
 * @file agf-infos.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfInfos', {
            templateUrl: 'components/agf-infos/agf-infos.html',
            controller: controller
        });

    /**
     * @namespace agfInfos
     * @memberof Components
     * @requires ___env
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

            if ($location.search().ggua) {
                vm.content = 'components/agf-infos/agf-infos-ggua.html';
            }
            else {
                vm.content = 'components/agf-infos/agf-infos-index.html';
            }

            return true;
        }
    }
})(angular);
