module.exports = (function () {

        "use strict";

        var sf = require("./factory"),
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
            ];

    return skills;
}());