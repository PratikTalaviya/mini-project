const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    // const userId = req.user._id;
    const userId = req.headers.authorization;
    console.log(userId);
    const todo = new Todo({ title, description, priority, userId });
    await todo.save();

    res.status(201).json({ message: "Todo created successfully", todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getTodos = async (req, res) => {
  try {
    // const userId = req.user._id;
    const userId = req.headers.authorization;

    const todos = await Todo.find({ userId });
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const updates = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(todoId, updates, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
