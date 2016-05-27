/**
 * @file agf.cfg.js
 * @namespace Configs
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .constant('__env', environment());

    function environment () {
        var __env = {};

        return Object.assign(__env, window.__env);
    }
})(angular);
