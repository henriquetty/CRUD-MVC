const express = require("express");
const app = express();
const path = require("path");

const routes = require("./routes/routes")

//parse body
app.use(express.urlencoded({ extended: true }));

//setting up static file serving
app.use(express.static(path.join(__dirname + "/public")));

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

//routes
app.use("/", routes);

const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log("Server running on port: " + port);
});
