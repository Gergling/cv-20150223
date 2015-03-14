angular.module('section-jobs').service("section-jobs.service.list", [

    "section-projects.service.list",

    function (projects) {

        "use strict";

        var scope = this;

        this.list = {
            azuragroup: {"label": "AzuraGroup", "title": "Web Developer", start: "2007", period: "2007 - 2008"},
            aviva: {"label": "Aviva", "title": "Front-end Developer", start: "2008", period: "2008 - June 2009"},
            unanimis: {"label": "Unanimis", "title": "PHP Developer", start: "2009", period: "June 2009 - June 2012"},
            gointeractive: {"label": "GoInteractive", "title": "Web Applications Developer", start: "2012", period: "June 2012 - May 2014"},
            fusepump: {"label": "FusePump", "title": "Senior Frontend Developer", start: "2014", period: "June 2014 - Present"}
        };
        this.order = {date: [ ]};
        angular.forEach(this.list, function (company, companyName) {
            company.name = companyName;
            company.projects = {};
            company.descriptionPartial = "module/section-jobs/partial/job-descriptions/" + company.name + ".html";

            scope.order.date.push(company);
        });
        angular.forEach(projects.list, function (project) {
            var company = scope.list[project.company];
            if (company) {
                company.projects[project.name] = project;
            }
        });
        this.order.date.sort(function (a, b) {
            return b.start - a.start;
        });
    }
]);
