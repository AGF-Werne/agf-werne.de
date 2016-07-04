/**
 * @file agf-projects.cmp.js
 * @namespace Components
 */

/* global angular */
(function (angular) {
    'use strict';

    angular
        .module('agf')
        .component('agfProjects', {
            templateUrl: 'components/agf-projects/agf-projects.html',
            controller: controller
        });

    /**
     * @namespace agfProjects
     * @memberof Components
     * @requires __env
     * @returns {Boolean}
     */
    function controller (__env, $location) {
        var vm = this;

        return init();

        function init () {
            var mode = __env.mode;
            var nav = __env[mode].navigation.main;

            vm.nav = nav;

            if ($location.search().cafe) {
                vm.content = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sapiente, et recusandae tenetur accusantium placeat, consequuntur at deleniti eaque laborum dignissimos voluptatem quod id, maxime eos labore ex magni minus.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laborum rem neque labore, vel id dolore! Aperiam dignissimos quod impedit sed illo odio mollitia? Rerum quia expedita quibusdam laboriosam, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero deleniti non commodi iusto quam, sapiente. Nihil vitae, rerum doloribus reiciendis reprehenderit laborum tenetur, distinctio quia numquam architecto hic ad saepe. A sapiente, et recusandae tenetur accusantium placeat, consequuntur at deleniti eaque laborum dignissimos voluptatem quod id, maxime eos labore ex magni minus.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A sapiente, et recusandae tenetur accusantium placeat, consequuntur at deleniti eaque laborum dignissimos voluptatem quod id, maxime eos labore ex magni minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, doloremque, reiciendis facere porro iure nostrum excepturi! Non et, ut eaque excepturi, quos numquam, repellendus provident nulla delectus vero sunt fugit.</p>';
            }
            else if ($location.search().course) {
                vm.content = '<div><div><h4>Deutschkurs 1 für Erwachsene</h4><p>Voluptas voluptatem, et quos autem totam ab, facilis eveniet consequatur.</p></div><table class="table table-bordered"><theader><th>Tag</th><th>Uhrzeit</th><th>Kursleiter</th></theader><tbody><tr><td>Di</td><td>18:30</td><td>Fr. M. Mustermann</td></tr><tr><td>Fr</td><td>17:45</td><td>Fr. M. Mustermann</td></tr></tbody></table><br><div><h4>Deutschkurs 2 für Erwachsene</h4><p>In odit modi pariatur, temporibus totam ut asperiores doloremque excepturi recusandae rem. Autem enim commodi tempore asperiores eaque, optio odit eveniet consectetur!Voluptas voluptatem, et quos autem totam ab, facilis eveniet consequatur.</p></div><table class="table table-bordered"><theader><th>Tag</th><th>Uhrzeit</th><th>Kursleiter</th></theader><tbody><tr><td>Mo</td><td>18:30</td><td>Fr. A. Ananas</td></tr><tr><td>Mi</td><td>17:45</td><td>Fr. K. Klabauter &amp; Fr. S. Sissifuss</td></tr><tr><td>Do</td><td>15:15</td><td>Fr. A. Ananas</td></tr></tbody></table><br><div><h4>Deutschkurs für Kinder</h4><p>Autem enim commodi tempore asperiores eaque, optio odit eveniet consectetur!Voluptas voluptatem, et quos autem totam ab, facilis eveniet consequatur.</p></div><table class="table table-bordered"><theader><th>Tag</th><th>Uhrzeit</th><th>Kursleiter</th></theader><tbody><tr><td>Mi</td><td>08:45</td><td>Fr. B. Backofen &amp; Fr. S. Sissifuss</td></tr><tr><td>Do</td><td>12:15</td><td>Fr. B. Backofen &amp; Fr. S. Sissifuss</td></tr></tbody></table></div>';
            }
            else if ($location.search().garage) {
                vm.content = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat reprehenderit recusandae dicta in ea quo, repellat, accusamus debitis, quisquam architecto at officiis eum eius sunt aliquam repudiandae. Impedit, possimus, dolorem!</p><br><address><strong>Fahrradwerkstatt</strong><br>Fahrradstraße 145<br>59368 Werne</address><div class="map"><img class="img-responsive" src="assets/images/map.png" alt="Karte von Werne mit Position vom B-Treff"></div>';
            }
            else {
                vm.content = '<h3>Deutschkurse</h3><p>Iure non dolores porro, ex dignissimos officiis vitae. Quo eligendi labore earum quisquam atque incidunt quam qui.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat atque facilis vitae corrupti. Iure non dolores porro, ex dignissimos officiis vitae. Quo eligendi labore earum quisquam atque incidunt quam qui.</p><br><h3>Frauen-Café</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat atque facilis vitae corrupti. Iure non dolores porro, ex dignissimos officiis vitae.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat atque facilis vitae corrupti. Iure non dolores porro, ex dignissimos officiis vitae. Quo eligendi labore earum quisquam atque incidunt quam qui.</p><p>Fugiat atque facilis vitae corrupti. Iure non dolores porro, ex dignissimos officiis vitae. Quo eligendi labore earum quisquam atque incidunt quam qui.</p><br><h3>Fahrradwerkstatt</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat atque facilis vitae corrupti. Iure non dolores porro, ex dignissimos officiis vitae. Quo eligendi labore earum quisquam atque incidunt quam qui.</p>';
            }

            return true;
        }
    }
})(angular);
