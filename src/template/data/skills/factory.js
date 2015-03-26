module.exports = (function () {

    "use strict";

    var extend = require("deep-extend"),
        category = require("./category"),
        factory = { },

        create = function (name, label, typeName, obj, presets) {
            var skill = { };
            presets = presets || { };
            obj = obj || { };
            skill.name = name;
            skill.label = label;
            skill.category = category.get(typeName);
            return extend(skill, presets, obj);
        };

    category.get().forEach(function (cat) {
        var fncName = cat.name,
            fnc = function (name, label, obj) {
                return create(name, label, fncName, obj);
            };

        if (cat.hasLanguage) {
            fnc = function (name, label, language, obj) {
                return create(name, label, fncName, obj, { language: language });
            };
        }

        factory[fncName] = fnc;
    });

    return factory;
}());