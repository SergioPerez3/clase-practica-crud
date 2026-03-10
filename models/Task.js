import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: String,
    completed: String,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;