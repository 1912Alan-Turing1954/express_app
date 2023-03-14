const express = require('express')
const router = express.Router();
const data = require('../data.json');
const fs = require('fs');

router.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

router.get('/data', (req, res) => {
    fs.readFile('./data.json', "utf8", (err, data) => {
        if (err) {
            res.send("File read failed:", err);
            return;
        }
        // console.log(data);
        // res.send(req.parse(data));
        res.send(data);
    });
});

router.get('/data/:id', (req, res) => {
    res.send(data[req.params.id]);
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

module.exports = router;