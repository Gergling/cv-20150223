angular.module('section-skills').service("section-skills.service.category", [

    "$filter",

    function ($filter) {

        "use strict";

        var category = function (name, label, glyphicon, hasLanguage) {
                var cat = { };
                cat.name = name;
                cat.label = label;
                cat.glyphicon = glyphicon || "cog";
                cat.hasLanguage = hasLanguage || false;
                return cat;
            },
            categories = [
                category("framework", "Framework", "gift", true),
                category("ide", "Development Environment"),
                category("ims", "Issue Management", "road"),
                category("language", "Language", "lamp"),
                category("library", "Library", "gift", true),
                category("os", "Operating System"),
                category("srcControl", "Source Control", "road"),
                category("stack", "Stack"),
                category("tool", "Tool", "wrench"),
                category("webserver", "Webserver")
            ];

        this.get = function (name) {
            var ret = categories;
            if (name) {
                ret = $filter('filter')(categories, { name: name })[0];
            }
            return ret;
        };
    }
]);
