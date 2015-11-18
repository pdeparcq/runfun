module Runfun.Layout{
    'use strict';

    var layout = angular.module('runfun.layout');
    
    class MenuItem{
        public name: string;
        public iconUrl: string;
    }

    export class ShellController {
        
        static $inject = ['$mdSidenav'];
        
        private sideNavigation : angular.material.ISidenavService;
        public menuItems : Array<MenuItem>;
        
        constructor($mdSidenav : angular.material.ISidenavService) {
           this.sideNavigation = $mdSidenav;
           this.menuItems = [
               {name:'Home',iconUrl:''},
               {name:'Calendar',iconUrl:''},
               {name:'Results',iconUrl:''}
               ];
        }
        
        public toggleSideNavigation(){
            this.sideNavigation('left').toggle();
        }
        
        public selectMenuItem(menuItem : MenuItem)
        {
            console.info(menuItem.name);
            this.sideNavigation('left').close();
        }
    }

    layout.controller('shellController', ShellController);
}
