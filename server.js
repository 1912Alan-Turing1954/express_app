const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    console.log("Ready");
    res.render("index", { text: "world"});
})

app.listen(148);