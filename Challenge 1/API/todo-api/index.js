const dbConnect = require("./models/MongoDb");
const express = require("express");
const { ObjectId } = require("bson");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.json({"tasks" : data});
});

app.get('/:id', async (req, res) => {
    let data = await dbConnect();
    data = await data.find({ _id : ObjectId(req.params.id) }).toArray();
    res.json({"tasks" : data});
});

app.post('/', async (req, res) => {
    const data = await dbConnect();
    const result = await data.insertOne({"content": req.body.content, "date": new Date()});
    res.send(result);
});

app.put('/:id', async (req, res) => {
    let data = await dbConnect();
    const result = await data.updateOne(
        { _id : ObjectId(req.params.id) },
        { $set: req.body }
    );
    data = await data.find().toArray();
    res.redirect('/');
})

app.delete('/:id', async (req, res) => {
    const data = await dbConnect();
    const result = await data.deleteOne({ _id : ObjectId(req.params.id) })
    res.send(result);
})

app.listen(3001);




// {
//     content: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// }