<!-- Generated <%- grunt.template.today("yyyy-mm-dd HH:MM:ss") %> -->
<!doctype html>
<html lang="en" data-ng-app="application">
<head>
    <title>Greg Davies CV</title>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <%
        paths.css.forEach(function (path) {
            %><%- "\t" %><link rel="stylesheet" type="text/css" href="<%- path.replace(prefix, "") %>"><%- "\n" %><%
        });
    %>

    <%
        paths.js.forEach(function (path) {
            %><%- "\t" %><script src='<%- path.replace(prefix, "") %>'></script><%- "\n" %><%
        });
    %>

</head>
<body data-ng-controller="application.controller.index">
    <div data-ng-include="'module/application/partial/index.html'">(Loading...)</div>
</body>
</html>
