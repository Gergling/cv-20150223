angular.module('section-skills').service("section-skills.service.list", [

    "$filter",
    "section-skills.service.skill",

    function ($filter, sf) {

        "use strict";

        var /*glyphiconMap = {
                "issue-management": "road",
                "subversion": "random",
                "text-editor": "edit",
                "language": "lamp",
                "framework": "gift",
                "tool": "wrench"
            },*/
            skills = [
                sf.stack("mean", "MEAN Stack"),

                sf.language("nodejs", "Node JS", { parent: "mean" }),
                sf.language("javascript", "Javascript"),
                sf.language("python", "Python"),
                sf.language("html", "HTML/HTML5"),
                sf.language("css", "CSS3"),
                sf.language("mysql", "MySQL", { parent: "lamp" }),
                sf.language("mongo", "Mongo", { parent: "mean" }),
                sf.language("shell", "Bash/Shell"),
                sf.language("batch", "Batch Scripting"),

                sf.framework("grunt", "Grunt", "nodejs"),
                sf.framework("express", "Express", "nodejs", { parent: "mean" }),
                sf.framework("angularjs", "AngularJS", "javascript", { parent: "mean" }),
                sf.framework("requirejs", "RequireJS", "javascript"),

                sf.library("backbone", "Backbone", "javascript"),
                sf.library("jQuery", "jQuery", "javascript"),
                sf.library("threejs", "Three.js", "javascript", { url: "http://threejs.org/" }),
                sf.library("chartjs", "DevExpress ChartJS", "javascript", { url: "http://chartjs.devexpress.com/" }),
                sf.library("bootstrap", "Bootstrap", "css"),

                sf.tool("jasmine", "Jasmine"),
                sf.tool("phpmyadmin", "PHPMyAdmin", { language: "mysql" }),
                sf.tool("workbench", "Workbench", { language: "mysql" }),
                sf.tool("phpmoadmin", "PHPMoAdmin", { language: "mongo" }),

                sf.ide("scite", "SciTE"),

                sf.os("ubuntu", "Linux (Ubuntu)", { parent: "lamp" }),

                sf.srcControl("svn", "SVN"),
                sf.srcControl("tfs", "TFS"),
                sf.srcControl("git", "GIT", { url: "https://github.com/Gergling" }),

                sf.ims("github", "GIT Hub", { url: "https://github.com/Gergling" }),
                sf.ims("lotus-notes", "Lotus Notes"),
                sf.ims("jira", "JIRA")
            ]/*,
            types = {
                "ims": {label: "Issue Management"},
                srcControl: {label: "Source Control"},
                language: {label: "Language"},
                tool: {label: "Tool"},
                "text-editor": {label: "Text Editor"},
                webserver: {label: "Web Server"},
                os: {label: "Operating System"},
                framework: {label: "Framework"}
            }*/;

        skills.forEach(function (skill) {
            //skill.typeIcon = "icon-cog";
            //skill.type = types[skill.typeName];
            //if (!skill.typeName) {throw "Skill '" + skill.name + "' not given a type."; }
            /*if (glyphiconMap[skill.typeName]) {
                skill.typeIcon = "glyphicon glyphicon-" + glyphiconMap[skill.typeName];
            }*/
        });

        this.types = function (name) {
            var ret;
            if (name) {
                ret = types[name];
                if (!ret) {
                    throw new Error("section-skills.service.list.types(): No type '" + name + "'.");
                }
            } else {
                throw new Error("section-skills.service.list.types(): 1st argument omitted. Should be a string.");
            }
            return ret;
        };
        this.get = function (name) {
            var ret = skills;
            if (name) {
                // Todo: Make skills an array.
                ret = $filter('filter')(skills, { name: name })[0];
            }
            return ret;
        };
    }
]);
