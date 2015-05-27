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
 * sEventDataResource: Data loaded externally through AJAX using RESTful architecture for rest based servers
 * */
'use strict';
/*eventsApp.factory('sEventDataResource', ['$resource', function ($resource) {
   return {
      getEvent: function () {
         /!*console.log("Using $resource");*!/
         return $resource('./data/event/:id' + '.json', {id: '@id'}).get({id: 1});
      }
   }
}]);*/
eventsApp.factory('sEventDataResource', ['$resource', function ($resource) {
        var resource = $resource('./data/event/:id' + '.json', { id: '@id' });
        return {
            getEvent: function () {
                return resource.get({ id: 1 });
            },
            save: function (event) {
                return resource.save(event);
            }
        };
    }]);
//# sourceMappingURL=sEventDataResource.js.map