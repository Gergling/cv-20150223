angular.module('application').factory("application.factory.download", [

    "section-jobs.factory.list",

    function (jobs) {

        "use strict";

        var obj = {
            txt: "",
            jobs: jobs
        };
        return obj;
    }
]);
