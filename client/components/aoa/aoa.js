/**
 * @file aoa.js
 * @author KloseD
 */

/* global agf*/
(function () {
    'use strict';

    agf.get('articles-of-association', 'de').then(show);

    return true;

    function show (result) {
        return agf.show(result, '#content');
    }
})();
