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
        res.send(data.toString());
    });
});

router.get('/data/:id', (req, res) => {
    res.send(req.data);
})

router.param('id', (req, res, next, id) =>{
    req.data = data[id % 2];
    next();
})  

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

module.exports = router;