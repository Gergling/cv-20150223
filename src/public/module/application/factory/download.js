qh.getModule('application').factory("application.factory.download", ["$rootScope", "section-skills.factory.list", "section-projects.factory.list", "section-jobs.factory.list", function ($rootScope, skills, projects, jobs) {
	var obj = {
		txt: "",
		jobs: jobs,
	};
	//console.log(jobs);
	//obj.txt += "=== CV ===\n";
	/*angular.forEach(jobs.order.date, function(job) {
		obj.txt += "== "+job.label+" ==\n";
		angular.forEach(job.projects, function(project) {
			obj.txt += "= "+project.label+" =\n";
			angular.forEach(job.skills, function(skill) {
				obj.txt += "= "+project.label+" =\n";
			});
		});
	});*/
	return obj;
}]);
