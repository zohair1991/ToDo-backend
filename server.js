const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (() => console.log("Connected to DB"))
.catch(console.error);


const ToDo = require('./models/ToDo')

app.get('/todos',async (req,res) => {
    const todos = await ToDo.find();
    res.json(todos);
});

app.post('/todo/new', (req,res) => {
    const todo = new ToDo({
        text : req.body.text
    });

    todo.save();

    res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await ToDo.findByIdAndDelete(req.params.id);
    res.json(result);
})


app.get('/todo/complete/:id', async (req, res) => {
    const todo = await ToDo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
})

app.listen(3001, () => console.log("Server started on port 3001"));