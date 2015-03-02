angular.module('section-skills').factory("section-skills.factory.list", function ($rootScope) {
	// All factories will go into a folder of factories in the module.
	var skills = {};
	skills.list = {
		//php5: {label: "PHP5", typeName: "language", parent:"lamp"},
		//zf2: {label: "Zend Framework 2 (ZF2)", typeName: "framework", language:"php5"},
		javascript: {label: "Javascript", typeName: "language"},
		angularjs: {label: "AngularJS", typeName: "framework", language:"javascript"},
		requirejs: {label: "RequireJS", typeName: "framework", language:"javascript"},
		backbone: {label: "Backbone", typeName: "framework", language:"javascript"},
		jQuery: {label: "jQuery", typeName: "framework", language:"javascript"},
		threejs: {label: "Three.js", url: "http://threejs.org/", typeName: "framework", language:"javascript"},
		chartjs: {label: "DevExpress ChartJS", url:"http://chartjs.devexpress.com/", typeName: "framework", language:"javascript"},
		html: {label: "HTML/HTML5", typeName: "language"},
		css: {label: "CSS3", typeName: "language"},
		lamp: {label: "LAMP Stack", typeName: "stack"},
		ubuntu: {label: "Linux (Ubuntu)", typeName: "os", parent:"lamp"},
		apache: {label: "Apache", typeName: "webserver", parent:"lamp"},
		mysql: {label: "MySQL", typeName: "language", parent:"lamp"},
		phpmyadmin: {label: "PHPMyAdmin", typeName: "tool", language:"mysql"},
		workbench: {label: "Workbench", typeName: "tool", language:"mysql"},
		mongo: {label: "Mongo", typeName: "language"},
		phpmoadmin: {label: "PHPMoAdmin", typeName:"tool", language:"mongo"},
		shell: {label: "Bash/Shell", typeName: "language"},
		batch: {label: "Batch Scripting", typeName: "language"},
		scite: {label: "SciTE", typeName: "text-editor"},
		svn: {label: "SVN", typeName: "subversion"},
		tfs: {label: "TFS", typeName: "subversion"},
		"git-subversion": {label: "GIT Subversion", typeName: "subversion", url: "https://github.com/Gergling"},
		"git-issues": {label: "GIT Issues", typeName: "issue-management", url: "https://github.com/Gergling"},
		lotusNotes: {label: "Lotus Notes", typeName: "issue-management"},
		jira: {label: "JIRA", typeName: "issue-management"},
		bootstrap: {label: "Bootstrap", typeName: "framework", language:"css"},
	};
	skills.types = {
		"issue-management": {label: "Issue Management"},
		subversion: {label: "Source Control"},
		language: {label: "Language"},
		tool: {label: "Tool"},
		"text-editor": {label: "Text Editor"},
		webserver: {label: "Web Server"},
		os: {label: "Operating System"},
		framework: {label: "Framework"},
	};
	skills.order = {alphabetical:[]};
	var iconMap = {
		"issue-management": "icon-road",
		"subversion": "icon-random",
		"text-editor": "icon-edit",
		"language": "icon-lightbulb",
		"framework": "icon-gift",
		"tool": "icon-wrench",
	};
	(function() {
		angular.forEach(skills.list, function(skill, skillName) {
			skill.name = skillName;
			skill.typeIcon = "icon-cog";
			skill.type = skills.types[skill.typeName];
			if (!skill.typeName) {throw "Skill '"+skill.name+"' not given a type.";}
			if (iconMap[skill.typeName]) {
				skill.typeIcon = iconMap[skill.typeName];
			}
			skill.toggle = function() {
				skill.selected = !skill.selected;
			};

			skills.order.alphabetical.push(skill);
		});
	}());
	return skills;
});
