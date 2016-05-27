/**
 *
 */
(function (window) {
    window.__env = window.__env || {};

    window.__env.mode = 'dev';

    // API url
    window.__env.apiUrl = 'http://dev.your-api.com';

    // Base url
    window.__env.baseUrl = '/';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;
}(this));
