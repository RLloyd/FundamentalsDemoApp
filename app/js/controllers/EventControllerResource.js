/*** Created by Odee on 5/25/15.*/
/* The Object content of sEventData service was originally from here.
 *  Inject it back and assigned to $scope.event.
 * */
'use strict';
eventsApp.controller('EventController', ['$scope', 'sEventDataResource', function EventController($scope, sEventDataResource) {
        /*$scope.event = sEventData.event;*/
        /*getting data using $http*/
        /*sEventDataHttpQ.getEvent(function(event){
         $scope.event = event;
         });*/
        /*getting data using $http and $q*/
        /*sEventDataResource.getEvent().then( //takes 2 parameters" success & error
         function (event) { $scope.event = event; }, //if successful
         function (statusCode) { console.log(statusCode); } //if error
         );*/
        /*getting data using $resource: Good for basic data binding*/
        /*$scope.event = sEventDataResource.getEvent();*/
        /*getting data using $resource with $promise: Allow to inspect data beforehand*/
        sEventDataResource.getEvent()
            .$promise.then(function (event) {
            $scope.event = event;
            console.log(event);
        }, function (response) {
            console.log(response);
        });
        /*voting mechanism*/
        $scope.upVoteSession = function (ses) {
            ses.upVoteCount++;
        };
        $scope.downVoteSession = function (ses) {
            ses.upVoteCount--;
        };
        /*console.log("Hello End of File!");*/
    }]);
//# sourceMappingURL=EventControllerResource.js.map