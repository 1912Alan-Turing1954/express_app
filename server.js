const express = require('express');
const app = express();

app.use(express.static("views"));
app.set('view engine', 'ejs');

app.get('/', logger, (req, res) => {
    console.log("Online");
    res.render("index");
});

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function isAuth(req, res, next) {
    const password = req.body.password;
    if (user.password === password) {
        next();
    } else {
        res.status(401);
        res.send('Access forbidden');
    }
}

app.listen(3000); 

