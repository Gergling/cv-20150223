qh.getModule('application').directive('cvDownload', function() {
	return {
		restrict: 'A',
		templateUrl: "module/application/partial/download-sample.html",
		controller: ["$scope", "$attrs", "application.factory.download", function($scope, $attrs, download) {
			$scope.jobs = download.jobs;
		}],
	};
});