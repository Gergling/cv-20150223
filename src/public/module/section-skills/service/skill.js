angular.module('section-skills').service("section-skills.service.skill", [

    function () {

        "use strict";

        var scope = this,
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
                skill.typeName = typeName;
                return angular.extend(skill, presets, obj);
            };

        [
            "ide",
            "ims",
            "language",
            "os",
            "srcControl",
            "stack",
            "tool"
        ].forEach(function (fncName) {
            scope[fncName] = function (name, label, obj) {
                return create(name, label, fncName, obj);
            };
        });

        [
            "framework",
            "library"
        ].forEach(function (fncName) {
            scope[fncName] = function (name, label, language, obj) {
                return create(name, label, fncName, obj, { language: language });
            };
        });
        /*this.stack = function (name, label, obj) {
            return create(name, label, "stack", obj);
        };
        this.language = function (name, label, obj) {
            return create(name, label, "language", obj);
        };*/
        this.framework = function (name, label, language, obj) {
            return create(name, label, "framework", obj, { language: language });
        };
        this.library = function (name, label, language, obj) {
            return create(name, label, "library", obj, { language: language });
        };
        //this.tool = function (name, label, obj) {
            //return create(name, label, "tool", obj);
        //};
    }
]);