
const express = require('express');
const Subscriber = require('./models/subscribers.js');
const app = express()
const cors = require('cors');


// Your code goes here

// Get All subscribers data
app.get('/subscribers', cors(), async (req, res) => {
    try {
        let result = await Subscriber.find();
        res.send(result);
    } catch (err) {
        console.log(err);
        res.send({ result: "Some Error Occurred!" });
    }
});

// Get name and subscriber detail 
app.get('/subscribers/names',cors(), async (req, res) => {
    try {
        let result = await Subscriber.find();
        result = result.map((item)=>{
            return {name:item.name, subscribedChannel:item.subscribedChannel}
        })
        res.status(200).send(result);
    } catch (err) {
        res.send({ result:"Some Error Occurred!" });
    }
});

// Get Single user data
app.get('/subscribers/:_id', cors(), async (req, res) => {
    try {
        let result = await Subscriber.find(req.params);
        if (result.length > 0) {
            res.status(200).send(result);
        } else {
            res.status(404).send({ result: "Data not Found!" });
        }
    } catch (err) {
        res.status(404).send({ result: "Server Error!" });
    }
});


module.exports = app;
