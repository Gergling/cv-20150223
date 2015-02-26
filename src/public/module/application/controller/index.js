qh.getModule('application').controller("application.controller.index", ["$rootScope", "$location", "$route", "application.factory.navigation", function($scope, $location, $routeConfig, navigation) {
	$scope.navigation = navigation;
	$scope.$on('$routeChangeSuccess', function (scope, current, previous) {
		navigation.setActive(current.params.module);
	});
}]);
