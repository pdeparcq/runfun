module Runfun.Core {
    'use strict';

    var core = angular.module('runfun.core');

    var config = {
        appErrorPrefix: '[runfun Error] ',
        appTitle: 'runfun'
    };

    core.value('config', config);
}
