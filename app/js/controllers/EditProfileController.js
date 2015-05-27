/**
 * Created by Odee on 5/26/15.
 */
'use strict';
eventsApp.controller('EditProfileController', ['$scope', 'sGravatarUrlBuilder', function EditProfileController($scope, sGravatarUrlBuilder) {
        $scope.user = {};
        $scope.getGravatarUrl = function (email) {
            return sGravatarUrlBuilder.buildGravatarUrl(email);
        };
    }]);
;
//# sourceMappingURL=EditProfileController.js.map