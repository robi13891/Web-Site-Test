// Imports
const express = require("express");
const app = express();
const port = 3000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
    res.render("index");
});

app.get("/web2", (req, res) => {
    res.render("web2");
});

app.get("/web3", (req, res) => {
    res.render("web3");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contacts", (req, res) => {
    res.render("contacts");
});

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));