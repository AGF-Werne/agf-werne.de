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
     * @returns {Boolean}
     */
    function controller (___env) {
        var vm = this;

        return true;
    }
})(angular);
