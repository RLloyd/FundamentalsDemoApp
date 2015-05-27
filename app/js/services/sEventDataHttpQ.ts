/**
 * Created by Odee on 5/26/15.
 */

/*
 *sEventData: Data included.
 * Inject this back to EventController where it was originally from.
 * register it in the index.html using <script... tag
 * */
/* sEventDataHttp: Data loaded externally through AJAX
 * sEventDataHttpQ: Data loaded externally through AJAX with Promise
 * */


'use strict';

eventsApp.factory('sEventDataHttpQ', ['$http', '$log', '$q', function ($http, $log, $q) {
   return {
      getEvent: function () {
         var deferred = $q.defer();

         $http({method: 'GET', url: './data/event/1.json'})
            .success(function (data, status, headers, config) {
               deferred.resolve(data);

               $log.info(data, status, headers, config);
               console.log("data:",data);
               console.log("status:",status);
               console.log("headers:",headers);
               console.log("config:",config);
            })

            .error(function (data, status, headers, config) {
               deferred.reject(status);

               $log.warn(data, status, headers, config);
            });

         return deferred.promise;
      }
   }]);
