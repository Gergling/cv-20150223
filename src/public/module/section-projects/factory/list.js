angular.module('section-projects').factory("section-projects.factory.list", ["$rootScope", "section-skills.factory.list", function ($rootScope, skills) {
	var projects = {};
	projects.list = {
		"azura-pps":{
			company: "azuragroup",
			label: "Property Problems Solved",
			issueManagement: "Spreadsheet",
			skillNames: [
				"php5",
				"javascript",
				"css",
				"svn",
				"mysql",
			],
		},
		"azura-blue-box-voting":{
			company: "azuragroup",
			label: "Blue Box Voting",
			issueManagement: "Email",
			skillNames: [
				"php5",
				"svn",
			],
		},
		"azura-professionals-world":{
			company: "azuragroup",
			label: "Professionals World",
			issueManagement: "Word Document",
			skillNames: [
				"html",
				"css",
				"javascript",
				"php5",
				"svn",
				"mysql",
			],
		},
		"aviva-rebrand":{
			company: "aviva",
			label: "Aviva Rebrand",
			skillNames: [
				"lotusNotes",
				"html",
				"css",
				"javascript",
				"jQuery",
				"svn",
			],
		},
		"unanimis-summarisation":{
			company: "unanimis",
			label: "Summariser",
			issueManagement: "Custom CRM",
			skillNames: [
				"php5",
				"svn",
				"mysql",
			],
		},
		"unanimis-downloader":{
			company: "unanimis",
			label: "Stats Downloader",
			issueManagement: "Custom CRM",
			skillNames: [
				"php5",
				"svn",
				"mysql",
			],
		},
		"unanimis-iab":{
			company: "unanimis",
			label: "IAB Cookie Standards",
			skillNames: [
				"php5",
				"javascript",
				"html",
				"svn",
			],
		},
		"unanimis-crm":{
			company: "unanimis",
			label: "CRM",
			issueManagement: "Custom CRM",
			skillNames: [
				"svn",
				"php5",
				"mysql",
			],
		},
		"gointeractive-workspace":{
			company: "gointeractive",
			label: "Insurance Workspace",
			skillNames: [
				"jira",
				"tfs",
				"angularjs",
				"jQuery",
				"bootstrap",
			],
		},
		"gointeractive-charts":{
			company: "gointeractive",
			label: "Workspace Chart Dashboard",
			skillNames: [
				"jira",
				"git-subversion",
				"angularjs",
				"chartjs",
				"jQuery",
				"bootstrap",
			],
		},
		"gointeractive-reports":{
			company: "gointeractive",
			label: "Sales Process Reporting Interface",
			skillNames: [
				"jira",
				"git-subversion",
				"angularjs",
				"zf2",
				"jQuery",
				"bootstrap",
				"mysql",
			],
		},
		"personal-cv":{
			label: "CV",
			skillNames: [
				"git-subversion",
				"git-issues",
				"jQuery",
				"angularjs",
				"requirejs",
				"bootstrap",
			],
		},
		"personal-smallcity":{
			label: "3D Cityscape",
			skillNames: [
				"threejs",
				"backbone",
				"requirejs",
				"jQuery",
			],
		},
		"personal-graphic-generator":{
			label: "Graphic Generator",
			skillNames: [
				"javascript",
				"jQuery",
				"requirejs",
				//"canvas2image",
			],
		},
		"personal-quadrahedron":{
			label: "Quadrahedron",
			skillNames: [
				"angularjs",
				"jQuery",
				"requirejs",
				"git-subversion",
				"git-issues",
			],
		},
	};
	(function() {
		$.each(projects.list, function(projectName, project) {
			project.name = projectName;
			project.descriptionPartial = "module/section-projects/partial/project-descriptions/"+project.name+".html";
			project.skills = {};
			project.skills["0_issue-management"] = {label: skills.types["issue-management"].label, list:[]};
			project.skills["0_subversion"] = {label: skills.types["subversion"].label, list:[]};

			angular.forEach(project.skillNames, function(skillName) {
				var skill = skills.list[skillName];
				if (skill) {
					//if (!project.skills["0_issue-management"]) {project.skills["0_issue-management"] = {label: skills.types["issue-management"].label, list:[]};}
					//if (!project.skills["0_subversion"]) {project.skills["0_subversion"] = {label: skills.types["subversion"].label, list:[]};}

					switch(skill.typeName) {
						case "subversion": case "issue-management": {
							var ps = project.skills["0_"+skill.typeName];
							ps.label = skill.type.label;
							ps.list.push(skill);
						} break;
						default: {
							if (!project.skills.other) {project.skills.other = {label:"Other Skills", list:[]};}
							project.skills.other.list.push(skill);
						} break;
					}
				} else {
					throw "Projects: No skill named '"+skillName+"'.";
				}
			});
			if (project.issueManagement) {project.skills["0_issue-management"].list.push({label:project.issueManagement});}
			if (project.subversion) {project.skills["0_subversion"].list.push({label:project.subversion});}
		});
	}());
	return projects;
}]);
