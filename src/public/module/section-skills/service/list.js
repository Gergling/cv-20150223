angular.module('section-skills').service("section-skills.service.list", [

    function (skillService) {

        "use strict";

        // All factories will go into a folder of factories in the module.
        var scope = this,
            iconMap = {
                "issue-management": "icon-road",
                "subversion": "icon-random",
                "text-editor": "icon-edit",
                "language": "icon-lamp",
                "framework": "icon-gift",
                "tool": "icon-wrench"
            };

        scope.list = {
            grunt: {label: "Grunt", typeName: "tool"},
            express: {label: "Express", typeName: "framework", parent: "mean"},
            mean: {label: "MEAN Stack", typeName: "stack"},
            nodejs: {label: "Node JS", typeName: "language", parent:"mean"},
            //php5: {label: "PHP5", typeName: "language", parent:"lamp"},
            //zf2: {label: "Zend Framework 2 (ZF2)", typeName: "framework", language:"php5"},
            javascript: {label: "Javascript", typeName: "language"},
            angularjs: {label: "AngularJS", typeName: "framework", language: "javascript", parent: "mean"},
            requirejs: {label: "RequireJS", typeName: "framework", language: "javascript"},
            backbone: {label: "Backbone", typeName: "framework", language: "javascript"},
            jQuery: {label: "jQuery", typeName: "framework", language: "javascript"},
            threejs: {label: "Three.js", url: "http://threejs.org/", typeName: "framework", language: "javascript"},
            chartjs: {label: "DevExpress ChartJS", url: "http://chartjs.devexpress.com/", typeName: "framework", language: "javascript"},
            html: {label: "HTML/HTML5", typeName: "language"},
            css: {label: "CSS3", typeName: "language"},
            //lamp: {label: "LAMP Stack", typeName: "stack"},
            ubuntu: {label: "Linux (Ubuntu)", typeName: "os", parent: "lamp"},
            //apache: {label: "Apache", typeName: "webserver", parent:"lamp"},
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
        };
        scope.types = {
            "issue-management": {label: "Issue Management"},
            subversion: {label: "Source Control"},
            language: {label: "Language"},
            tool: {label: "Tool"},
            "text-editor": {label: "Text Editor"},
            webserver: {label: "Web Server"},
            os: {label: "Operating System"},
            framework: {label: "Framework"}
        };
        scope.order = { alphabetical: [ ] };

        angular.forEach(scope.list, function (skill, skillName) {
            skill.name = skillName;
            skill.typeIcon = "icon-cog";
            skill.type = scope.types[skill.typeName];
            if (!skill.typeName) {throw "Skill '" + skill.name + "' not given a type."; }
            if (iconMap[skill.typeName]) {
                skill.typeIcon = "glyphicon glyph" + iconMap[skill.typeName];
            }
            skill.toggle = function () {
                skill.selected = !skill.selected;
            };

            scope.order.alphabetical.push(skill);
        });

        this.get = function (name) {
            var ret = skills;
            if (name) {
                ret = $filter('filter')(skills, { name: name });
            }
            return ret;
        };
    }
]);
