import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error getting tasks" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!Task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: "Invalid task id" });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);

    await task.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
};

export const updateTask = async (req, res) => {
try {
      const { id } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",
  });

  if (!updateTask) {
    return res.status(404).json({ error: "Task noy found" });
  }
  res.json(updatedTask);
} catch (error) {
    res.status(400).json({ error: "Invalid task id" });
}
};

export const deleteTask = async (req, res) => {
try {
      const { id } = req.params;

  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(204).send();
} catch (error) {
    res.status(400).json({ error: "Invalid task id" });
}
};
