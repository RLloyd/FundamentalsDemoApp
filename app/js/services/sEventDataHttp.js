/**
 * Created by Odee on 5/26/15.
 */
/*
 *sEventData: Data included.
 * Inject this back to EventController where it was originally from.
 * register it in the index.html using <script... tag
 * */
/* sEventDataHttp: Data loaded externally through AJAX
 *
 * */
'use strict';
eventsApp.factory('sEventDataHttp', function ($http, $log) {
    return {
        getEvent: function (successCallback) {
            $http({ method: 'GET', url: './data/event/1.json' })
                .success(function (data, status, headers, config) {
                $log.info(data, status, headers, config);
                successCallback(data);
                console.log("data:", data);
                console.log("status:", status);
                console.log("headers:", headers);
                console.log("config:", config);
            })
                .error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        }
    };
});
//# sourceMappingURL=sEventDataHttp.js.map