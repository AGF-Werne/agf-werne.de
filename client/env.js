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
                    name: 'Home',
                    link: '#/'
                },
                {
                    name: '&Uuml;ber uns',
                    link: '#/about',
                    children: [
                        {
                            name: 'Vereinssatzung',
                            link: '#/'
                        },
                        {
                            name: 'Vorsitzende',
                            link: '#/'
                        },
                        {
                            name: 'Mitgliedsantrag',
                            link: '#/'
                        }
                    ]
                },
                {
                    name: 'Unsere Arbeit',
                    link: '#/projects',
                    children: [
                        {
                            name: 'Aktuelles',
                            link: '#/'
                        },
                        {
                            name: 'Sprachkurse',
                            link: '#/'
                        },
                        {
                            name: 'Frauen-Café',
                            link: '#/'
                        },
                        {
                            name: 'Betreuung',
                            link: '#/'
                        },
                        {
                            name: 'Fahrradwerkstatt',
                            link: '#/'
                        }
                    ]
                },
                {
                    name: 'Kontakt',
                    link: '#/contact',
                    children: [
                        {
                            name: '&Ouml;ffnungszeiten',
                            link: '#/'
                        },
                        {
                            name: 'Sprachkurse',
                            link: '#/'
                        },
                        {
                            name: 'Frauen-Café',
                            link: '#/'
                        },
                        {
                            name: 'Betreuung',
                            link: '#/'
                        },
                        {
                            name: 'Fahrradwerkstatt',
                            link: '#/'
                        }
                    ]
                }
            ]
        }
    };
}(this));
