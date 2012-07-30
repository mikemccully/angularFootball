'use strict';

/* Services */

/**
 * Create a service that will get the teams from a restful server.
 */
angular.module('teams.services', ['ngResource']).
	factory('Teams', function($resource){
		return $resource('data/teams.php', {}, {
			query: {
				method:'GET', 
				params:{}, 
				isArray:true, 
				headers:{
					'Range':'items=0-14',
					'Content-Type': 'application/json'
				}
			}
		});
	});

angular.module('conference.services', ['ngResource']).
	factory('Conference', function($resource){
		return $resource('data/conferences.php', {}, {
			query: {
				method: 'GET',
				params: {},
				isArray: true
			}
		});
	});