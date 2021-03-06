// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
 


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
console.log(__dirname + "/app/public");
app.use(express.static(__dirname + "/app/public"));

require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

