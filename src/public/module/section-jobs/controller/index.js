qh.getModule('section-jobs').controller("section-jobs.controller.index", ["$rootScope", "section-jobs.factory.list", function($scope, jobs) {
	$scope.jobs = jobs;
}]);
