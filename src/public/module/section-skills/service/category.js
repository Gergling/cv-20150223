angular.module('section-skills').service("section-skills.service.category", [

    "$filter",

    function ($filter) {

        "use strict";

        var scope = this,

            category = function (name, label, glyphicon, hasLanguage) {
                var category = { };
                category.name = name;
                category.label = label;
                category.glyphicon = glyphicon || "cog";
                category.hasLanguage = hasLanguage || false;
                return category;
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
                category("webserver", "Webserver"),
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
