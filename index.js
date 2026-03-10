import express from "express";
import "./db.js"

import taskRouter from "./routes/task.router.js";
import noteRouter from "./routes/note.router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Bienvenidos a la API"});
});

app.use("/task", taskRouter);
app.use(noteRouter);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

