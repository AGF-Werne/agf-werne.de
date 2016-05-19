/**
 * @file aoa.js
 * @author KloseD
 */

/* global $, marked */
(function () {
    'use strict';

    var url = 'https://api.github.com/repos/AGF-Werne/articles-of-association/contents/de.md';

    return $.get(url, onSuccess);

    function onSuccess (result) {
        var content = atob(result.content);

        document.getElementById('content').innerHTML = marked(content);
    }
})();