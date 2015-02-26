<!-- Generated <%- grunt.template.today("yyyy-mm-dd HH:MM:ss") %> -->
<!doctype html>
<html lang="en">
<head>
    <title>Greg Davies CV</title>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <%
        paths.css.forEach(function (path) {
            %><link rel="stylesheet" type="text/css" href="<%- prefix + path %>"><%- "\n" %><%
        });
    %>

    <%
        paths.js.forEach(function (path) {
            %><script src='<%- prefix + path %>'></script><%- "\n" %><%
        });
    %>

</head>
<body data-ng-controller="application.controller.index">
    <div data-ng-view></div>
</body>
</html>
