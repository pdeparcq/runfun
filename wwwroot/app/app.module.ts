module Runfun {
    'use strict';

    export var app: angular.IModule =
        angular.module('runfun', ['runfun.core', 'runfun.home', 'blocks.log', 'blocks.exception', 'blocks.router']);
}
