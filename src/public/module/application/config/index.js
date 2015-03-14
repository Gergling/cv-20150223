angular.module('application').config([

    '$routeProvider',

    function ($routeProvider) {

        "use strict";

        $routeProvider.when('/', { });
        $routeProvider.when('/:module/', { });
        $routeProvider.otherwise({templateUrl: 'module/application/partial/404.html'});
    }
]);
