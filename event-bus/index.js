const express = require('express');
const axios = require('axios')

// app
const app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post('/events', (req,res) => {
    const event = req.body

    axios.post('http://localhost:4000/events', event)
    axios.post('http://localhost:4001/events', event)
    axios.post('http://localhost:4002/events', event)
    axios.post('http://localhost:4003/events', event)

    res.send({status: 'OK'})
})

app.listen(4005, () => {
    console.log("Running on 4005")
})