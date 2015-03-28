module.exports = (function () {

    "use strict";

    var jobs = [ ],
        args = [
            "name",
            "label",
            "title",
            "start",
            "period"
        ];

    [
        [ "azuragroup", "AzuraGroup", "Web Developer", "2007", "2007 - 2008" ],
        [ "aviva", "Aviva", "Frontend Developer", "2008", "2008 - June 2009" ],
        [ "unanimis", "Unanimis", "PHP Developer", "2009", "June 2009 - June 2012" ],
        [ "gointeractive", "GoInteractive", "Web Applications Developer", "2012", "June 2012 - May 2014" ],
        [ "fusepump", "FusePump", "Senior Frontend Developer", "2014", "June 2014 - Present" ]
    ].forEach(function (data) {
        var job = { };

        args.forEach(function (name, idx) {
            job[name] = data[idx];
        });

        jobs.push(job);
    });

    return jobs;
}());