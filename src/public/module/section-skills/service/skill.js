angular.module('section-skills').service("section-skills.service.skill", [

    "$filter",

    function ($filter) {

        "use strict";

        var scope = this,

            category = function (name, label, glyphicon, hasLanguage) {
                var category = { };
                category.name = name;
                category.label = label;
                category.glyphicon = glyphicon || "cog";
                category.hasLanguage = hasLanguage;
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
            ],

            Skill = function () {
                this.toggle = function () {
                    this.selected = !this.selected;
                };
            },
            create = function (name, label, typeName, obj, presets) {
                var skill = new Skill();
                presets = presets || { };
                obj = obj || { };
                skill.name = name;
                skill.label = label;
                skill.category = (function () {
                    var cat = $filter('filter')(categories, { name: typeName })[0];
                    if (!cat) {
                        throw new Error("section-skills.service.skill: No category '" + typeName + "'");
                    }
                    return cat;
                }());
                skill.typeName = typeName;
                return angular.extend(skill, presets, obj);
            };

        categories.forEach(function (cat) {
            var fncName = cat.name,
                fnc = function (name, label, obj) {
                    return create(name, label, fncName, obj);
                };

            if (cat.hasLanguage) {
                fnc = function (name, label, language, obj) {
                    return create(name, label, fncName, obj, { language: language });
                };
            }

            scope[fncName] = fnc;
        });
    }
]);