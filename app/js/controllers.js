'use strict';

/* Controllers */

function TeamCtrl($scope, Teams)
{
	$scope.teams = Teams.query({}, function(teams){
		$scope.teamSelect = teams[0].TeamId;
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
	$scope.value = Conference.query();
}