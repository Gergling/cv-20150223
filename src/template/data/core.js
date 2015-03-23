module.exports = (function () {

    "use strict";

    return {
        skills: function () {return JSON.stringify(require("./skills/list")); },
        projects: function () {return JSON.stringify(require("./projects/list")); },
    };
}());