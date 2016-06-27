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
     * @returns {Boolean}
     */
    function controller (__env) {
        var vm = this;

        return true;
    }
})(angular);
