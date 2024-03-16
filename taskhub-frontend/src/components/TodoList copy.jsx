import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos"); // Assuming the backend API is served at /api/todos
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (todo) => {
    setEditedTodo(todo);
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await axios.put(`/api/todos/${updatedTodo.id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
      setEditedTodo(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <tbody>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </tbody>
  );
};

export default TodoList;
