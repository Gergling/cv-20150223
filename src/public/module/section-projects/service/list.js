angular.module('section-projects').service("section-projects.service.list", [

    "application.constant.data",
    "section-skills.service.list",
    "section-skills.service.category",

    function (data, skills, category) {

        "use strict";

        this.list = data.projects;

        this.list.forEach(function (project) {
            var categories = [ "ims", "srcControl" ],
                categorySkills = { other: { label: "Development", list: [ ] } };

            // Anything without a company name is considered to be a personal project.
            project.company = project.company || "personal";

            // Each project has an HTML partial describing it.
            project.descriptionPartial = [
                "module/section-projects/partial/project-descriptions/",
                project.company,
                "-",
                project.name,
                ".html"
            ].join("");

            // Each project will have a list of skill category objects.
            project.skills = [ ];

            // Set up categories for project.
            categories.forEach(function (categoryName) {
                categorySkills[categoryName] = angular.extend({ }, category.get(categoryName), { list: [ ] });
            });

            // Find all project skills and apply to category.
            project.skillNames.forEach(function (skillName) {
                var skill = skills.get(skillName),
                    categoryName = "other";

                // If the skill is registered, categorise it with those listed, or under 'other'.
                if (skill) {
                    if (categories.indexOf(skill.category.name) > -1) {categoryName = skill.category.name; }

                    categorySkills[categoryName].list.push(skill);
                }
            });

            // Apply all categorised skills to project.
            categories.concat([ "other" ]).forEach(function (cat) {
                project.skills.push(categorySkills[cat]);
            });
        });
    }
]);
