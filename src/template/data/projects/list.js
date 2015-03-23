module.exports = (function () {

    "use strict";

    var extend = require("deep-extend"),
        category = require("../skills/category"),
        skills = require("../skills/list"),
        p = function (name, label, obj, skillNames) {
            return extend({
                name: name,
                label: label,
                skillNames: skillNames
            }, obj);
        },
        projects = [
            p("pps", "Property Problems Solved", {
                company: "azuragroup",
                issueManagement: "Spreadsheet"
            }, [
                "php5",
                "javascript",
                "css",
                "svn",
                "mysql"
            ]),
            p("blue-box-voting", "Blue Box Voting", {
                company: "azuragroup",
                issueManagement: "Email"
            }, [
                "php5",
                "svn"
            ]),
            p("professionals-world", "Professionals World", {
                company: "azuragroup",
                issueManagement: "Word Document"
            }, [
                "html",
                "css",
                "javascript",
                "php5",
                "svn",
                "mysql"
            ]),
            p("rebrand", "Aviva Rebrand", { company: "aviva" }, [
                "lotusNotes",
                "html",
                "css",
                "javascript",
                "jQuery",
                "svn"
            ]),
            p("summarisation", "Summariser", { 
                company: "unanimis",
                issueManagement: "Custom CRM"
            }, [
                "php5",
                "svn",
                "mysql"
            ]),
            p("downloader", "Stats Downloader", {
                company: "unanimis",
                issueManagement: "Custom CRM"
            }, [
                "php5",
                "svn",
                "mysql"
            ]),
            p("iab", "IAB Cookie Standards", { company: "unanimis" }, [
                "php5",
                "javascript",
                "html",
                "svn"
            ]),
            p("crm", "CRM", {
                company: "unanimis",
                issueManagement: "Custom CRM"
            }, [
                "svn",
                "php5",
                "mysql"
            ]),
            p("workspace", "Insurance Workspace", { company: "gointeractive" }, [
                "jira",
                "tfs",
                "angularjs",
                "jQuery",
                "bootstrap"
            ]),
            p("charts", "Workspace Chart Dashboard", { company: "gointeractive" }, [
                "jira",
                "git-subversion",
                "angularjs",
                "chartjs",
                "jQuery",
                "bootstrap"
            ]),
            p("reports", "Sales Process Reporting Interface", { company: "gointeractive" }, [
                "jira",
                "git-subversion",
                "angularjs",
                "zf2",
                "jQuery",
                "bootstrap",
                "mysql"
            ]),
            p("cv", "CV", { }, [
                "git-subversion",
                "git-issues",
                "jQuery",
                "angularjs",
                "requirejs",
                "bootstrap",
                "grunt"
            ]),
            p("smallcity", "3D Cityscape", { }, [
                "threejs",
                "backbone",
                "requirejs",
                "jQuery"
            ]),
            p("graphic-generator", "Graphic Generator", { }, [
                "javascript",
                "jQuery",
                "requirejs"
            ]),
            p("quadrahedron", "Quadrahedron", { }, [
                "angularjs",
                "jQuery",
                "requirejs",
                "git-subversion",
                "git-issues"
            ]),
            p("platform", "Platform", { company: "fusepump" }, [
                "jasmine",
                "grunt",
                "nodejs",
                "angularjs",
                "jQuery",
                "git",
                "jira"
            ]),
            p("digital", "Nestle Lightboxes", { company: "fusepump" }, [
                "jasmine",
                "grunt",
                "nodejs",
                "angularjs",
                "jQuery",
                "git",
                "jira"
            ])
        ];

    projects.forEach(function (project) {
        var categories = [ "ims", "srcControl" ],
            categorySkills = { other: { label: "Other Skills", list: [ ] } };

        //project.name = projectName;
        project.descriptionPartial = "module/section-projects/partial/project-descriptions/" + project.company + "-" + project.name + ".html";
        project.skills = [ ];
        categories.forEach(function (categoryName) {
            categorySkills[categoryName] = extend(category.get(categoryName), { list: [ ] });
        });

        project.skillNames.forEach(function (skillName) {
            var skill = skills.filter(function (s) {return s.name === skillName; })[0],
                categoryName = "other";

            // If the skill is registered, categorise it with those listed, or under 'other'.
            if (skill) {
                if (categories.indexOf(skill.category.name) > -1) {categoryName = skill.category.name; }
                //skill.category.list = [ ];
                //console.log(skill);
                //JSON.stringify(project);

                categorySkills[categoryName].list.push(skill);
            }
        });

        categories.concat([ "other" ]).forEach(function (cat) {
            categorySkills[cat].list.forEach(function (skill) {
                skill.category = { };
            });
            project.skills.push(categorySkills[cat]);            
        });
    });

    return projects;
}());