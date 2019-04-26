var http = require("http");
var fs = require("fs");


var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {

        case "/food":
            fs.readFile(__dirname + "/food.html", function (err, data) {

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
        case "/frameworks":
            fs.readFile(__dirname + "/food.html", function (err, data) {

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
        case "/movies":
            fs.readFile(__dirname + "/food.html", function (err, data) {

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
    }

}

server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});