//libraries
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

apiUrl = process.env.API_SERVER;

//view engine configuration
app.set("view engine", "ejs");

//GET METHOD
app.get('/', async (req, res) => {
    try{
        let resp = await axios.get(apiUrl)
        res.render("todo.ejs", { todoTasks: resp.data.tasks });
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

//POST METHOD
app.post('/',async (req, res) => {
    try {
        const payload = { "content" : req.body.content }
        await axios.post(apiUrl, payload);
        res.redirect("/");
    } catch (err) {
        console.log(err)
        res.redirect("/");
    }
});

//UPDATE
app
.route("/edit/:id")
.get(async (req, res) => {
    const id = req.params.id;
    try{
        let resp = await axios.get(apiUrl)
        res.render("todoEdit.ejs", { todoTasks: resp.data.tasks, idTask: id });
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})
.post(async (req, res) => {
    const id = req.params.id;
    try{
        let resp = await axios.put(apiUrl+id, {"content" : req.body.content });
        console.log(id + req.body.content)
        res.render("todoEdit.ejs", { todoTasks: resp.data.tasks, idTask: id });
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
});

//DELETE
app.route("/remove/:id").get(async (req, res) => {
    const id = req.params.id;
    try{
        let resp = await axios.delete(apiUrl+id, {"content" : req.body.content });
    } catch (err) {
        console.log(err)
    }
    res.redirect('/')
});

app.listen(3000);