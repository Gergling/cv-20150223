angular.module('application').controller("application.controller.index", [

    "$rootScope",
    "application.factory.navigation",
    "$route", // Injection is required to start routing.

    function ($scope, navigation) {

        "use strict";

        $scope.navigation = navigation;
        /*jslint unparam: true*/
        $scope.$on('$routeChangeSuccess', function (scope, current) {
            navigation.setActive(current.params.module);
        });
        /*jslint unparam: false*/
    }
]);
