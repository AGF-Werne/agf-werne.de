/**
 * @file agf-mosaic.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfMosaic', {
            templateUrl: 'components/agf-home/agf-mosaic/agf-mosaic.html',
            controller: controller
        });

    /**
     * @namespace agfMosaic
     * @memberof Components
     * @requires __env
     * @requires $location
     * @returns {Boolean}
     */
    function controller (__env, $location) {
        var vm = this;

        init();

        return true;

        function init () {
            vm.onClick = onClick;
        }

        function onClick (path) {
            $location.path(path);

            return true;
        }
    }
})(angular);
