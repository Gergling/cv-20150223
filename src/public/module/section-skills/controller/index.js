angular.module('section-skills').controller("section-skills.controller.index", ["$rootScope", "section-skills.factory.list", function($scope, skills) {
	$scope.skills = skills;
}]);
