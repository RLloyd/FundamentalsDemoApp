/**
 * Created by Odee on 5/25/15.
 */
'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute', 'ngResource']);

// ROUTES
eventsApp.config(function ($routeProvider) {
   $routeProvider
      .when('/', {
         templateUrl: "EventDetails.html",
         controller: "EventController"
      })
      .when('/NewEvent', {
         templateUrl: "NewEvent.html",
         controller: "EditEventController"
      })
      .when('/EditProfile', {
         templateUrl: "EditProfile.html",
         controller: "EditProfileController"
      })

      .otherwise({
         redirectTo: '/'
      });
});
