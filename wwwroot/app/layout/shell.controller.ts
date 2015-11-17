module Runfun.Layout{
    'use strict';

    var layout = angular.module('runfun.layout');

    export class ShellController {
        
        static $inject = ['$mdSidenav'];
        
        private sideNav : any;
        
        constructor($mdSidenav) {
           this.sideNav = $mdSidenav;
        }
        
        public toggleSidenav(menuId : string){
            this.sideNav(menuId).toggle();
            console.info("sidenavigation triggered")
        }
    }

    layout.controller('shellController', ShellController);
}
