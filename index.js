import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var tasks = [];
var workTasks = [];
const date = new Date();
const toDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function doTheStuff(req, res, next) {
    const dateOne = new Date();
    const toDateOne = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);
    const monthName = months[date.getMonth()];
    if(toDate == toDateOne) {
        app.get("/", (req, res) => {
            res.render("index.ejs", {dateToday : toDateOne, taskList : tasks});
        });
        app.get("/work", (req, res) => {
            res.render("work.ejs", { thisMonth : monthName, taskList : workTasks});
        });
        app.post("/", (req, res) => {
            var newTasks = [].concat(tasks, req.body["task"]);
            tasks = newTasks;
                res.redirect("/");
        });
        app.post("/work", (req, res) => {
            let newTask = [].concat(workTasks, req.body["workTask"]);
            workTasks = newTask;
                res.redirect("/work");
        });
    }
    next();
}
app.use(doTheStuff);

app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});