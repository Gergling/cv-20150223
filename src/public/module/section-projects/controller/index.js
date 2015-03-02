angular.module('section-projects').controller("section-projects.controller.index", ["$rootScope", "section-projects.factory.list", function($scope, projects) {
	$scope.projects = projects;
}]);
