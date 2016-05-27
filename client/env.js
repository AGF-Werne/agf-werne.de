/**
 * @file env.js
 */
(function (window) {
    'use strict';

    window.__env = window.__env || {};

    // Mode
    window.__env.mode = 'dev';

    // Whether or not to enable debug mode
    // Setting this to false will disable console output
    window.__env.enableDebug = true;

    window.__env.dev = {
        articles: {
            source: 'github',
            url: {
                base: 'api.github.com/repos/AGF-Werne/'
            },
            file: {
                extension: '.md'
            },
            protocol: 'https'
        },
        navigation: {
            main: [
                {
                    name: 'Über uns',
                    link: '#/',
                    children: [
                        {
                            name: 'Das sind wir',
                            link: '#/'
                        },
                        {
                            name: 'Vereinssatzung',
                            link: '#/'
                        }
                    ]
                },
                {
                    name: 'Unsere Arbeit',
                    link: '#/',
                    children: [
                        {
                            name: 'Sprachkurse',
                            link: '#/'
                        },
                        {
                            name: 'Frauen-Café',
                            link: '#/'
                        }
                    ]
                }
            ]
        }
    };
}(this));
