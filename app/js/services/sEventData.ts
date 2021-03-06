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


eventsApp.factory('sEventData', function () {
   return {
      event: {
         name: 'Angular Boot Camp',
         date: '05/25/2015',
         time: '10:30 am',
         location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
         },
         imageUrl: 'img/jeep_hot_rod.jpg',
         sessions: [
            {
               name: 'Directive Masterclass',
               creatorName: 'Bob Smith',
               duration: 1, //using a custom filter
               level: 'Advanced',
               abstract: 'In this session you will learn the ins and out of directives.',
               upVoteCount: 10
            },
            {
               name: 'Scopes for fun and profit',
               creatorName: 'John Doe',
               duration: 2,
               level: 'Introductory',
               abstract: 'This session will take a closer look at $scopes.',
               upVoteCount: 10
            },
            {
               name: 'Directive Masterclass',
               creatorName: 'Jane Doe',
               duration: 4,
               level: 'Intermediate',
               abstract: 'Controllers are the beginning of everything Angular does.',
               upVoteCount: 10
            }
         ]
      };
}
})
;
