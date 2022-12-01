const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = require('./app.js')
const port = process.env.PORT | 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://ramm_1_99:ramm_1_99@subscriber.xawpniz.mongodb.net/youtube?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
