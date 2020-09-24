const express = require('express');
const app = express();
const port = process.env.PORT || process.env.IP || 3000;


app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home")
});

app.get("/about", function (req, res) {
    res.render("about")
});

app.listen(port, () => console.log("Demo Has Started!"));