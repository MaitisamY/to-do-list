import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user : "postgres",
    host : "localhost",
    database : "to-do-list",
    password : "my@postgres",
    port : 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

async function getView() {
    const result = await db.query("SELECT * from to_do_list ORDER BY id DESC");
    const tasks = result.rows;
    return tasks;
}

app.get("/", async (req, res) => {
    const tasks = await getView();
    res.render("index.ejs", {
        taskList : tasks
    });
});

app.post("/add", async (req, res) => {
    const addTask = req.body.task;
    const result = await db.query("INSERT INTO to_do_list (task_list) VALUES ($1)", [addTask]);
    console.log(addTask);
    res.redirect("/");
});

app.post("/delete", async (req, res) => {
    const deleteTask = req.body.deleteTask;
    console.log(deleteTask);
    res.redirect("/");
});

app.post("/update", async (req, res) => {
    const id = req.body.id;
    const task = req.body.modified;
    try {
        await db.query("UPDATE to_do_list SET task_list = $1 WHERE id = $2 RETURNING *", [task, id]);
        console.log(`${id} ${task}`);
        const tasks = await getView();
        res.render("index.ejs", {
            taskList : tasks,
            message : "Task updated successfully."
        });
    }
    catch (err) {
        console.log(err);
    }
    
});

app.listen(port, () => {
    console.log(`Listening at: ${port}`);
});