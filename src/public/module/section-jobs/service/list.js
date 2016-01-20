angular.module('section-jobs').service("section-jobs.service.list", [

    "$filter",
    "application.constant.data",
    "section-projects.service.list",

    function ($filter, data, projects) {

        "use strict";

        this.list = data.jobs;

        this.list.forEach(function (job) {
            job.projects = $filter('filter')(projects.list, { company: job.name });
            job.descriptionPartial = "module/section-jobs/partial/job-descriptions/" + job.name + ".html";
        });
    }
]);
