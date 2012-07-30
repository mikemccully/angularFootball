'use strict';

/* Controllers */

function TeamCtrl($scope, Teams)
{
	$scope.teams = Teams.query({}, function(teams){
		$scope.team = teams[0];
		$scope.teamSelect = $scope.team.TeamId;
	});
	
	$scope.getTeam = _getTeam;
	
	function _getTeam()
	{
		var teamId = this.teamSelect.valueOf();
		for (var index in $scope.teams)
		{
			var item = $scope.teams[index];
			if (item.TeamId == teamId)
			{
				$scope.team = item;
				break;
			}
		}
	}
}

function ConferenceCtrl($scope, Conference)
{
	$scope.conferences = Conference.query();
	$scope.getTeams = _getTeams;
	
	function _getTeams()
	{
		var conferenceId = this.conferenceSelect.valueOf()
		alert("ConferenceId: " + conferenceId);
	}
}