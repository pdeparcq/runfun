module Runfun.Home {
    'use strict';

    var home = angular.module('runfun.home');

    export class HomeController {
        static $inject = ['moment'];

        public msg : string;

        constructor(moment : moment.MomentStatic) {
           this.msg = 'Welcome home to Runfun! It is: ' + moment().format('LLLL');
        }
    }

    home.controller('homeController', HomeController);
}
