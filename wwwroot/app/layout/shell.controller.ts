module Runfun.Layout{
    'use strict';

    var layout = angular.module('runfun.layout');

    export class ShellController {
        
        static $inject = ['$mdSidenav'];
        
        private sideNavigation : angular.material.ISidenavService;
        
        constructor($mdSidenav : angular.material.ISidenavService) {
           this.sideNavigation = $mdSidenav;
        }
        
        public toggleSideNavigation(menuId : string){
            this.sideNavigation(menuId).toggle();
        }
    }

    layout.controller('shellController', ShellController);
}
