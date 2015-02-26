qh.getModule('application').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {});
	$routeProvider.when('/:module/', {});
	$routeProvider.otherwise({templateUrl: 'module/application/partial/404.html'});
}]);
