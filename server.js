const express = require("express");
const app = express();

const routes = require("./routes/routes")
const User = require("./models/User");

//parse body
app.use(express.urlencoded({ extended: true }));

//setting up static file serving
app.use(express.static("public"));

//set view engine
app.set("view engine", "ejs");

//routes
app.use("/", routes);

app.listen(8080);
