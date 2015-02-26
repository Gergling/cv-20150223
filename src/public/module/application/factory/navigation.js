qh.getModule('application').factory("application.factory.navigation", function ($rootScope) {
	// All factories will go into a folder of factories in the module.
	var navigation = (function() {
		var nav = {};
		nav.list = {
			skills: {label: "Skills"},
			jobs: {label: "Jobs"},
			projects: {label: "Projects"},
			download: {label: "Download"},
		};
		nav.order = ["skills", "jobs", "projects"];
		nav.index = {order: []};
		nav.defaultActive = "skills";
		nav.setActive = function(activeName) {
			var active = nav.list[nav.defaultActive];
			if (activeName) {
				active = nav.list[activeName];
			}
			nav.active = active;
		};
		(function() {
			jQuery.each(nav.list, function(name, obj) {
				obj.name = name;
				obj.url = "/"+obj.name+"/";
				obj.include = "module/section-"+obj.name+"/partial/index.html";
			});
			nav.list.download.include = "module/application/partial/download.html";
			angular.forEach(nav.order, function(name) {
				nav.index.order.push(nav.list[name]);
			});
			nav.setActive(nav.defaultActive);
		}());
		return nav;
	}());
	return navigation;
});
