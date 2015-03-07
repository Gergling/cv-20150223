angular.module('section-skills').service("section-skills.service.list", [

    "$filter",
    "section-skills.service.skill",

    function ($filter, sf) {

        "use strict";

        var scope = this,
            glyphiconMap = {
                "issue-management": "road",
                "subversion": "random",
                "text-editor": "edit",
                "language": "lamp",
                "framework": "gift",
                "tool": "wrench"
            },
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
            ],
            /*skills = {
                jasmine: {label: "Jasmine", typeName: "tool"},
                grunt: {label: "Grunt", typeName: "tool"},
                express: {label: "Express", typeName: "framework", parent: "mean"},
                mean: {label: "MEAN Stack", typeName: "stack"},
                nodejs: {label: "Node JS", typeName: "language", parent: "mean"},
                javascript: {label: "Javascript", typeName: "language"},
                angularjs: {label: "AngularJS", typeName: "framework", language: "javascript", parent: "mean"},
                requirejs: {label: "RequireJS", typeName: "framework", language: "javascript"},
                backbone: {label: "Backbone", typeName: "framework", language: "javascript"},
                jQuery: {label: "jQuery", typeName: "framework", language: "javascript"},
                threejs: {label: "Three.js", url: "http://threejs.org/", typeName: "framework", language: "javascript"},
                chartjs: {label: "DevExpress ChartJS", url: "http://chartjs.devexpress.com/", typeName: "framework", language: "javascript"},
                html: {label: "HTML/HTML5", typeName: "language"},
                css: {label: "CSS3", typeName: "language"},
                ubuntu: {label: "Linux (Ubuntu)", typeName: "os", parent: "lamp"},
                mysql: {label: "MySQL", typeName: "language", parent: "lamp"},
                phpmyadmin: {label: "PHPMyAdmin", typeName: "tool", language: "mysql"},
                workbench: {label: "Workbench", typeName: "tool", language: "mysql"},
                mongo: {label: "Mongo", typeName: "language", parent: "mean"},
                phpmoadmin: {label: "PHPMoAdmin", typeName: "tool", language: "mongo"},
                shell: {label: "Bash/Shell", typeName: "language"},
                batch: {label: "Batch Scripting", typeName: "language"},
                scite: {label: "SciTE", typeName: "text-editor"},
                svn: {label: "SVN", typeName: "subversion"},
                tfs: {label: "TFS", typeName: "subversion"},
                "git-subversion": {label: "GIT Subversion", typeName: "subversion", url: "https://github.com/Gergling"},
                "git-issues": {label: "GIT Issues", typeName: "issue-management", url: "https://github.com/Gergling"},
                lotusNotes: {label: "Lotus Notes", typeName: "issue-management"},
                jira: {label: "JIRA", typeName: "issue-management"},
                bootstrap: {label: "Bootstrap", typeName: "framework", language: "css"}
            },*/
            types = {
                "ims": {label: "Issue Management"},
                srcControl: {label: "Source Control"},
                language: {label: "Language"},
                tool: {label: "Tool"},
                "text-editor": {label: "Text Editor"},
                webserver: {label: "Web Server"},
                os: {label: "Operating System"},
                framework: {label: "Framework"}
            };

        //scope.order = { alphabetical: [ ] };

        skills.forEach(function (skill) {
            skill.typeIcon = "icon-cog";
            skill.type = types[skill.typeName];
            if (!skill.typeName) {throw "Skill '" + skill.name + "' not given a type."; }
            if (glyphiconMap[skill.typeName]) {
                skill.typeIcon = "glyphicon glyphicon-" + glyphiconMap[skill.typeName];
            }
            /*skill.toggle = function () {
                skill.selected = !skill.selected;
            };*/

            //scope.order.alphabetical.push(skill);
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
