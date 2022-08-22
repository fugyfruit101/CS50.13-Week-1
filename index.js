// this is a single-line javascript comment

// define a variable and place into it the http package (shared code) from node.js
let myhttp = require("http");


let myserver = myhttp.createServer( 
  // createServer() uses our function to run when a request comes in
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;

    mytext = "Hello World"

    // writeHead() creates an http response header, including the status code (200 OK), the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    // end() returns some data and closes the response (sends it)
    myresponse.end( mytext + "\n" );
  }

 );

// ask http to start listening on a tcp port for incoming http requests
// listen() takes 2 args: 1: tcp port #, string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");

console.log("server has started");

