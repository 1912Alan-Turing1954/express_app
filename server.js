require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// app.use(express.static("views"));
// app.use(express.urlencoded({ extended: false }))
// app.set('view engine', 'ejs');
app.use(express.json());

const router = require('./routes/route')
app.use('/route', router);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000') 
});


