module.exports = function (grunt, dist, src) {

    var libPath = '../../node_modules/rtf/',

        htmlparser = require("htmlparser2");
        rtf = require('rtf'),
        extend = require('deep-extend'),

        data = {
            jobs: require('./data/jobs/list'),
            projects: require('./data/projects/list'),
            skills: require('./data/skills/list')
        },

        replace = function (str, mappings) {
            mappings.forEach(function (mapping) {
                str = str.split(mapping[0]).join(mapping[1]);
            });
            return str;
        },
        getTemplateString = function (html) {
            var str = "",
                parser = new htmlparser.Parser({
                    ontext: function(text) {
                        text = text.trim();
                        str += " " + text;
                    }
                });

            parser.write(html);
            parser.end();

            str = replace(str, [
                [ "\t", " " ],
                [ "\r", ""  ],
                [ "\n", " " ],
                [ " .", "." ]
            ]);
            str = str.replace(/\s{2,}/g, ' ');
            return str.trim();
        },


        format = function (opts, fnc) {
            var F = require(libPath + 'lib/format'),
                f = new F();

            opts = extend({ size: 10, underline: false }, opts || { });

            f.underline = opts.underline;
            f.fontSize = opts.size;

            if (opts.title) {f.bold = true; }

            if (fnc) {fnc(f); }

            return f;
        },
        fonts = {
            paragraph: format(),
            title: format({ title: true, size: 20, underline: true }),
            jobTitle: format({ title: true, size: 18, underline: true }),
            projectTitle: format({ title: true, size: 14 }),
            skill: format()
        },

        Format = require(libPath + 'lib/format'),
        Colors = require(libPath + 'lib/colors'),
        RGB = require(libPath + 'lib/rgb'),
        myDoc = new rtf();

    myDoc.writeText("Greg Davies CV", fonts.title);
    myDoc.addLine();
    myDoc.writeText("CV at http://goo.gl/QSZUPQ", fonts.paragraph);
    myDoc.addLine();
    myDoc.writeText("Development and code for generating this document at https://github.com/Gergling/cv-20150223", fonts.paragraph);
    myDoc.addLine();

    data.jobs.sort(function (a, b) {return b.period > a.period; });
    data.jobs.forEach(function (job) {
        var projects = data.projects.filter(function (project) {return project.company === job.name; });

        myDoc.writeText(job.label, fonts.jobTitle);
        myDoc.addLine();
        myDoc.writeText("From " + job.period.replace("-", "to"), fonts.paragraph);
        myDoc.addLine();
        myDoc.writeText(getTemplateString(grunt.file.read(src + "public/module/section-jobs/partial/job-descriptions/" + job.name + ".html")), fonts.paragraph);
        myDoc.addLine();

        // Include projects
        projects.forEach(function (project) {
            var skills = [ ];

            myDoc.writeText(project.label, fonts.projectTitle);
            myDoc.addLine();
            myDoc.writeText(getTemplateString(grunt.file.read(src + "public/module/section-projects/partial/project-descriptions/" + job.name + "-" + project.name + ".html")), fonts.paragraph);
            myDoc.addLine();
            myDoc.addLine();
            project.skillNames.forEach(function (skillName) {
                var s = data.skills.filter(function (skill) {
                    return skill.name === skillName;
                });
                if (s.length) {skills.push(s[0].label); }
            });

            myDoc.writeText(skills.join(", "), fonts.paragraph);
            myDoc.addLine();
        });
        myDoc.addLine();
    });

    myDoc.createDocument(function(err, output){
        grunt.file.write(dist + 'cv.rtf', output);
    });

};