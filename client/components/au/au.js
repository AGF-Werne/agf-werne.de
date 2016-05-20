/**
 * @file au.js
 * @author KloseD
 */

/* global agf*/
(function () {
    'use strict';

    agf.get('about-us', 'de').then(show);

    return true;

    function show (result) {
        return agf.show(result, '#content');
    }
})();
