// Require/import the HTTP module
var http = require("http");

// Define 2 ports to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

// Create 2 generic functions to handle requests and responses from both ports
function handleRequest(request, response) {

    // 1. Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
}
function handleRequest2(request, response) {

    // 2. Send the below string to the client when the user visits the PORT2 URL
    response.end("It Works!! Path Hit: " + request.url);
  }

// Use the Node HTTP package to create our servers.
// Pass the handleRequest and hadnleRequest2 function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

// Start our first server so that it can begin listening to client requests on first port.
server.listen(PORT, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    console.log("SOMETHING GOOD ABOUT YOURSELF");
});

// Start our second server so that it can begin listening to client requests on second port.
server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
    console.log("SOMETHING BAD ABOUT YOURSELF");
    });
