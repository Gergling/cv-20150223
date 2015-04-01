module.exports = function (grunt, dist, src) {

    var libPath = '../../node_modules/rtf/',

        htmlparser = require("htmlparser2");
        rtf = require('rtf'),

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

        Format = require(libPath + 'lib/format'),
        Colors = require(libPath + 'lib/colors'),
        RGB = require(libPath + 'lib/rgb'),
        myDoc = new rtf(),
        red_underline = new Format(),
        blue_strike = new Format(),
        green_bold = new Format(),
        maroon_super = new Format(),
        gray_sub = new Format(),
        lime_indent = new Format(),
        custom_blue = new Format();

    red_underline.color = Colors.RED;
    red_underline.underline = true;
    red_underline.fontSize = 20;
    myDoc.writeText("Red underlined", red_underline);
    myDoc.addLine();
    blue_strike.color = Colors.RED;
    blue_strike.strike = true;
    myDoc.writeText("Strikeout Blue", blue_strike);
    myDoc.addLine();
    green_bold.color = Colors.GREEN;
    green_bold.bold = true;
    myDoc.writeText("Bold Green", green_bold);
    myDoc.addLine();
    maroon_super.color = Colors.MAROON;
    maroon_super.superScript = true;
    myDoc.writeText("Superscripted Maroon", maroon_super);
    myDoc.addLine();
    gray_sub.color = Colors.GRAY;
    gray_sub.subScript = true;
    myDoc.writeText("Subscripted Gray", gray_sub);
    myDoc.addLine();
    lime_indent.color = Colors.LIME;
    lime_indent.backgroundColor = Colors.Gray;
    lime_indent.leftIndent = 50;
    myDoc.writeText("Left indented Lime", lime_indent);
    myDoc.addLine();
    custom_blue.color = new RGB(3, 80, 150);
    myDoc.writeText("Custom blue color", custom_blue);
    myDoc.addLine();

    data.jobs.forEach(function (job) {
        var projects = data.projects.filter(function (project) {return project.company === job.name; });

        myDoc.writeText(job.label, custom_blue);
        myDoc.addLine();
        myDoc.writeText(getTemplateString(grunt.file.read(src + "public/module/section-jobs/partial/job-descriptions/" + job.name + ".html")), custom_blue);
        myDoc.addLine();

        // Include projects
        projects.forEach(function (project) {
            myDoc.writeText(project.label, custom_blue);
            myDoc.addLine();
            myDoc.writeText(getTemplateString(grunt.file.read(src + "public/module/section-projects/partial/project-descriptions/" + job.name + "-" + project.name + ".html")), custom_blue);
            myDoc.addLine();
            project.skillNames.forEach(function (skillName) {
                data.skills.filter(function (skill) {
                    if (skill.name === skillName) {
                        myDoc.writeText(skill.label, custom_blue);
                        myDoc.addLine();
                    }
                });
            });
        });
    });

    myDoc.createDocument(function(err, output){
        grunt.file.write(dist + 'cv.rtf', output);
    });

};