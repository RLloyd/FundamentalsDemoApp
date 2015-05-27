/*** Created by Odee on 5/25/15.*/
/* The Object content of sEventData service was originally from here.
*  Inject it back and assigned to $scope.event.
* */
'use strict';
eventsApp.controller('EventController', ['$scope', 'sEventDataHttpQ', function EventController($scope, sEventDataHttpQ) {
        /*$scope.event = sEventDataHttpQ.event;*/
        /*getting data using $http*/
        /*sEventDataHttpQ.getEvent(function(event){
           $scope.event = event;
        });*/
        /*getting data using $http and $q*/
        sEventDataHttpQ.getEvent().then(function (event) { $scope.event = event; }, function (statusCode) { console.log(statusCode); } //if error
         //if error
        );
        /*voting mechanism*/
        $scope.upVoteSession = function (ses) {
            ses.upVoteCount++;
        };
        $scope.downVoteSession = function (ses) {
            ses.upVoteCount--;
        };
        /*console.log("Hello End of File!");*/
    }]);
//# sourceMappingURL=EventControllerHttpQ.js.map