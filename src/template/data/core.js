module.exports = (function () {

    "use strict";

    return {
        skills: function () {return JSON.parse(require("./skills/list")); }
    };
}());