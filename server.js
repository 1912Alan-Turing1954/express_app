const express = require('express');
const app = express();

app.use(express.static("views"));
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

const users = [];

app.get('/', logger, (req, res) => {
    res.redirect('/login');
});

app.get('/login', logger, (req, res) => {
    res.render('login');
})

app.get('/register', logger, (req, res) => {

})

app.post('/register', logger, (req, res) => {

})

app.post('/login', logger, (req, res) => {

})

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
console.log('Server listening on http://localhost:3000') 

