import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
    user : "to_do_list_iro4_user",
    host : "dpg-ckvo0qi37rbc739ik510-a",
    database : "to_do_list_iro4",
    password : "zUFwp300d292kxfbwRmS66RZvVkAzitC",
    port : 5432,
});

db.connect();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

async function getView() {
    const result = await db.query("SELECT * from to_do_list ORDER BY id ASC");
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
    try {
        await db.query("INSERT INTO to_do_list (task_list) VALUES ($1)", [addTask]);
        console.log(addTask);
        const tasks = await getView();
        res.render("index.ejs", {
            taskList : tasks,
            message : "Task created successfully."
        });
    }
    catch (err) {
        console.log(err);
    }
   
});

app.post("/delete", async (req, res) => {
    const deleteTask = req.body.deleteTask;
    try {
        await db.query("DELETE FROM to_do_list WHERE id = $1", [deleteTask]);
        console.log(deleteTask);
        const tasks = await getView();
        res.render("index.ejs", {
            taskList : tasks,
            message : "Task has been removed."
        });
    }
    catch (err) {
        console.log(err);
    }
});

app.post("/update", async (req, res) => {
    const id = req.body.id;
    const task = req.body.modified;
    try {
        await db.query("UPDATE to_do_list SET task_list = $1 WHERE id = $2 RETURNING *", [task, id]);
        console.log(`Id: ${id} & Task: ${task}`);
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
