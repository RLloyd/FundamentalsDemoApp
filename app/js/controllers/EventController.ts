/*** Created by Odee on 5/25/15.*/

/* The Object content of sEventData service was originally from here.
*  Inject it back and assigned to $scope.event.
* */

'use strict';

eventsApp.controller('EventController', ['$scope', 'sEventData', function EventController($scope, sEventData) {
   $scope.event = sEventData.event;

   $scope.upVoteSession = function (ses) {
      ses.upVoteCount++;
   };
   $scope.downVoteSession = function (ses) {
      ses.upVoteCount--;
   };

   console.log("Hello End of File!");
}]);
