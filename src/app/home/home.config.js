'use strict';

/* @ngInject */
function homeConfig($stateProvider){
    $stateProvider
        .state('main.home', {
            url: '/',
            controller: 'HomeCtrl as home',
            template: require('./home.html')
        })
}

module.exports = homeConfig;