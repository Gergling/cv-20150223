angular.module('section-projects').service("section-projects.service.list", [

    "section-skills.service.list",

    function (skills) {
        var projects = this;
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
                    "grunt"
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
            "fusepump-platform":{
                label: "Platform",
                company: "fusepump",
                skillNames: [
                    "jasmine",
                    "grunt",
                    "nodejs",
                    "angularjs",
                    "jQuery",
                    "git",
                    "jira",
                ],
            },
            "fusepump-digital":{
                label: "Nestle Lightboxes",
                company: "fusepump",
                skillNames: [
                    "jasmine",
                    "grunt",
                    "nodejs",
                    "angularjs",
                    "jQuery",
                    "git",
                    "jira",
                ],
            },
        };
        angular.forEach(projects.list, function(project, projectName) {
            var categories = [ "ims", "srcControl" ],
                categorySkills = { other: { label: "Other Skills", list: [ ] } };

            project.name = projectName;
            project.descriptionPartial = "module/section-projects/partial/project-descriptions/" + project.name + ".html";
            project.skills = [ ];
            /*categories.forEach(function (typeName) {
                categorySkills[typeName] = { label: skills.types(typeName).label, list: [ ] };
            });*/

            angular.forEach(project.skillNames, function(skillName) {
                var skill = skills.get(skillName),
                    categoryName = "other";

                if (skill) {
                    if (categories.indexOf(skill.category.name) > -1) {categoryName = skill.category.name; }

                    if (!categorySkills[categoryName]) {
                        categorySkills[categoryName] = angular.extend(skill.category, { list: [ ] });
                    }

                    categorySkills[categoryName].list.push(skill);
                }
            });

            categories.concat([ "other" ]).forEach(function (category) {
                project.skills.push(categorySkills[category]);
            });
        });
    }
]);
