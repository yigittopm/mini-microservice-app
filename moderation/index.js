const express = require('express')
const axios = require('axios')

// app
const app = express()

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/events', async (req,res) => {
    const { type, data } = req.body

    if(type === "CommentCreated") {
        const status = data.content.includes('orange') ? 'rejected' : 'approved' 

        await axios.post("http://localhost:4005/events", {
            type: "CommentModerated",
            data: {
                id: data.id,
                postId: data.postId,
                content: data.content,
                status
            }
        })
    }

    res.send({})
})

app.listen(4003, () => {
    console.log("Running on 4003")
})