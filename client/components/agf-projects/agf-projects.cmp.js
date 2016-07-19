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

            if ($location.search().womanclasses) {
                // vm.content = '<div class="page-header"><h1>Deutschunterricht für Frauen</h1></div><p><b>Der Deutschunterricht für Frauen</b> findet seit Februar 2015  zwei Mal wöchentlich vormittags in den Räumen des JuWeL statt. Seit Juli 2016 sind im B-Treff die Räume so ausgestattet worden, dass jetzt dort der Unterricht stattfinden kann.</p><p>Wir bieten 3 Kurse an: einen Alfabetisierungskurs, einen für Sprachanfängerinnen und den dritten für Anfängerinnen mit geringen Vorkenntnissen.</p><p>Das Interesse der Frauen an der Sprache ist ebenso groß wie das der Männer, weil aber die Betreuung der Kinder in der Regel nur in den Händen der Frauen liegt, bieten wir diese Kurse nicht nur zu anderen Zeiten an sondern auch mit der Möglichkeit, die Kinder mitzubringen. Seit Juli 2016 können die Kinder jetzt auch in der „Löwenburg“, dem Kindergarten für Flüchtlingskinder, betreut werden und die Mütter sich ganz auf den Unterricht konzentrieren.</p>';
                vm.content = 'components/agf-projects/agf-projects-b-treff.html';
            }
            else if ($location.search().workintegration) {
                // vm.content = '<div class="page-header"><h1>„Integration in die Arbeitswelt“</h1></div><p><b>Der Arbeitskreis „Integration in die Arbeitswelt“</b> hat sich zum  Ziel gesetzt, möglichst vielen Flüchtlingen den deutschen Arbeitsalltag näher zu bringen.</p><p>Wir versuchen Hospitations- und Praktikumsplätze zu finden, so dass interessierte Asylbewerber mit Grundkenntnissen in der deutschen Sprache einen Einblick in die Strukturen und Abläufe in Firmen, Läden oder Büros bekommen. Dabei arbeiten wir mit dem Integration-Point und der Ausländerbehörde zusammen.</p>';
                vm.content = 'components/agf-projects/agf-projects-b-treff.html';
            }
            else if ($location.search().btreff) {
                vm.content = 'components/agf-projects/agf-projects-b-treff.html';
            }
            else {
                // vm.content = '<div class="page-header"><h1>Kaffeetrinken für Flüchtlingsfrauen</h1></div><p><b>Das Kaffeetrinken für Flüchtlingsfrauen</b> hat die AGF in Zusammenarbeit mit dem WSC im Februar 2015 ins Leben gerufen. Monatlich bieten wir den Frauen damit die Möglichkeit, sich untereinander und mit  ihren deutschen Betreuerinnen in zwangloser Atmosphäre zu unterhalten, neue Bekanntschaften zu machen und dabei auch die  erworbenen Deutschkenntnisse zu testen. Seit Juli 2016 findet das Treffen im B-Treff in der Burgstraße statt.</p>';
                vm.content = 'components/agf-projects/agf-projects-b-treff.html';
            }

            return true;
        }
    }
})(angular);
