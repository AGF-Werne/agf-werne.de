/**
 * @file agf-statutes.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfStatutes', {
            templateUrl: 'components/agf-statutes/agf-statutes.html',
            controller: controller
        });

    /**
     * @namespace agfStatutes
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env, $http, $timeout) {
        var vm = this;

        init();

        return true;

        function init () {
            var mode = __env.mode;
            var articles = __env[mode].articles;
            var extension = articles.file.extension;
            var protocol = articles.protocol;
            var url = articles.url.base;

            console.log(protocol + '://' + url + 'articles-of-association/contents/de' + extension);
            console.log('https://api.github.com/repos/AGF-Werne/articles-of-association/contents/de.md');

            $http
                .get(protocol + '://' + url + 'articles-of-association/contents/de' + extension)
                .then(function (response) {
                    return response.data;
                })
                .then(function (data) {
                    return data.content;
                })
                .then(function (content) {
                    $timeout(function () {
                        vm.statutes = marked(atob(content));
                    }, 0);
                });

            return true;
        }
    }
})(angular);
