'use strict';

angular.module('myApp.controllers', []).
    controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('/api/subscribers')
            .success(function(data) {
                $scope.subscribers = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }]).    

    controller('NewSubscriberController', ['$scope', '$http', '$window', function($scope, $http, $window) {
        $scope.formData = {};
        console.log('Into Subscriber!!');
        $scope.createSubscriber = function() {
            console.log('Going to create Subscriber!!!');
            $http.post('/api/subscribers', $scope.formData)
                .success(function(data) {
                    $window.location.href = '/index.html';
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
    }]).

    controller('DeleteSubscriberController', ['$scope', '$http', function($scope, $http) {
        $scope.deleteSubscriber = function(id) {
            $http.delete('/api/subscribers' + id)
                .success(function(data) {
                    getAllSubscribers();
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
    }]).

    controller('ViewSubscriberController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
        $http.get('/api/subscribers/' + $routeParams.id)
            .success(function(data) {
                $scope.subscribers = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }]);