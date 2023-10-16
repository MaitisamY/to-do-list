import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var tasks = [];
var workTasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/work", (req, res) => {
    res.render("work.ejs");
});

app.post("/", (req, res) => {
    let newTasks = [].concat(tasks, req.body["task"]);
    tasks = newTasks;
        res.render("index.ejs", {
            task: tasks
        });
});

app.post("/work", (req, res) => {
    let newTask = [].concat(workTasks, req.body["workTask"]);
    workTasks = newTask;
        res.render("work.ejs", {
            task: workTasks
        });
});

app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});