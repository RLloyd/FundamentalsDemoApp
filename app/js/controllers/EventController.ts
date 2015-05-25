/**
 * Created by Odee on 5/25/15.
 */
'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute']);

// ROUTES
eventsApp.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
         templateUrl: "EventDetails.html",
         controller: "EventController"
      })
      .otherwise({
         redirectTo: '/'
      });
});

eventsApp.controller('EventController', ['$scope', function EventController($scope){
     /* $scope.event = {
         name: 'Angular Boot Camp',
         date: '05/25/2015',
         time: '10:30 am'
      };*/

      $scope.scooper = "Hello Scooper!";
      console.log("Hello");
}]);
