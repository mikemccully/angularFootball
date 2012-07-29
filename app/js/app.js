'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['teams.services', 'conference.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/teams', {
    	templateUrl: 'partials/teams.html', 
    	controller: TeamCtrl
	});
    $routeProvider.when('/conferences', {
    	templateUrl: 'partials/conferences.html',
    	controller: ConferenceCtrl
    });
    $routeProvider.otherwise({redirectTo: '/teams'});
  }]);
