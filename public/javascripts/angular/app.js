'use strict';

angular.module('myApp', ['myApp.controllers', 'ngRoute']).
config(function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/subscriber', {
            templateUrl: 'subscriber',
            controller: 'NewSubscriberController'
        }).
        when('/subscriber/:id', {
            templateUrl: 'subscriber',
            controller: 'ViewSubscriberController'
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});