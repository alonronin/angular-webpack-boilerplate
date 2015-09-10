'use strict';

var angular = require('angular');

module.exports = angular.module('main', [
    require('angular-ui-router')
])

.config(require('./main.config'))

.controller('MainCtrl', require('./main.ctrl'))

.name

;


