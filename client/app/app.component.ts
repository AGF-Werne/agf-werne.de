/**
 * @file app/app.component.ts
 */
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Home } from './home/home.component.ts';
import { About } from './about/about.component.ts';
import { Impressum } from './impressum/impressum.component.ts';

@Component({
    selector: 'agf-app',
    directives: [
        ROUTER_DIRECTIVES
    ],
    template: `
        <div class="app">
            <nav>
                <ul>
                    <li>
                        <a [routerLink]=" ['Home'] ">Home</a>
                    </li>
                    <li>
                        <a [routerLink]=" ['About'] ">About</a>
                    </li>
                    <li>
                        <a [routerLink]=" ['Impressum'] ">Impressum</a>
                    </li>
                </ul>
            </nav>

            <main>
                <router-outlet></router-outlet>
            </main>
        </div>
    `
})

@RouteConfig([
    {
        path: '/',
        name: 'Home',
        component: Home,
        useAsDefault: true
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: Impressum
    }
])

export class AppComponent { }