'use strict';

/* @ngInject */
function mainConfig($urlRouterProvider, $locationProvider, $stateProvider){
    $urlRouterProvider.rule(function ($i, $location) {
        var path = $location.path();
        var normalized = path.toLowerCase();
        if (path != normalized) return normalized;
    });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(false);

    $stateProvider
        .state('main', {
            abstract: true,
            template: require('./main.html')
        })
}

module.exports = mainConfig;