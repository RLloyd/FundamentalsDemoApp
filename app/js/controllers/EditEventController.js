/**
 * Created by Odee on 5/25/15.
 */
'use strict';
eventsApp.controller('EditEventController', ['$scope', function EditEventController($scope) {
        $scope.saveEvent = function (event, newEventFormParam) {
            console.log("newEventForm: ", newEventFormParam);
            if (newEventFormParam.$valid) {
                window.alert("event " + event.name + " saved!");
            }
        };
        $scope.cancelEdit = function () {
            window.location = "#/NewEvent";
        };
    }]);
//# sourceMappingURL=EditEventController.js.map