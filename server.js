const express = require('express');
const userRouter = require('./routes/users');
const app = express();

app.set("view engine", "ejs");

app.get('/', logger, (req, res) => {
    console.log("Online");
    res.render("index", { text: "world"});
});

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(3000);