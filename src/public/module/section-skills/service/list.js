angular.module('section-skills').service("section-skills.service.list", [

    "$filter",
    "application.constant.data",

    function ($filter, data) {

        "use strict";

        var skills = data.skills;

        skills.forEach(function (skill) {
            skill.toggle = function () {
                skill.selected = !skill.selected;
            };
        });

        this.get = function (name) {
            var ret = skills;
            if (name) {
                ret = $filter('filter')(skills, { name: name })[0];
            }
            return ret;
        };
    }
]);
