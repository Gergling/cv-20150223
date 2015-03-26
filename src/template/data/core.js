module.exports = (function () {

    "use strict";

    var data = { };

    [
        "skills",
        "projects",
        "jobs"
    ].forEach(function (name) {
        data[name] = function () {return JSON.stringify(require("./" + name + "/list")); };
    });

    return data;
}());
