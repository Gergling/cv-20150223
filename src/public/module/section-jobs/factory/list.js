angular.module('section-jobs').factory("section-jobs.factory.list", ["$rootScope", "section-projects.factory.list", function ($rootScope, projects) {
	// All factories will go into a folder of factories in the module.
	var jobs = {};
	jobs.list = {
		azuragroup: {"label": "AzuraGroup", "title": "Web Developer", start: "2007", period: "2007 - 2008"},
		aviva: {"label": "Aviva", "title": "Front-end Developer", start: "2008", period: "2008 - June 2009"},
		unanimis: {"label": "Unanimis", "title": "PHP Developer", start: "2009", period: "June 2009 - June 2012"},
		gointeractive: {"label": "GoInteractive", "title": "Web Applications Developer", start: "2012", period: "June 2012 - Present"},
	};
	jobs.order = {date:[]};
	(function() {
		angular.forEach(jobs.list, function(company, companyName) {
			company.name = companyName;
			company.projects = {};
			company.descriptionPartial = "module/section-jobs/partial/job-descriptions/"+company.name+".html";

			jobs.order.date.push(company);
		});
		angular.forEach(projects.list, function(project) {
			var company = jobs.list[project.company];
			if (company) {
				company.projects[project.name] = project;
			}
		});
		jobs.order.date.sort(function(a,b) {
			return b.start-a.start;
		});
	}());
	// Each project description will have it's own partial.
	return jobs;
}]);
