import React, { useState, useEffect } from "react";
import { getTodos } from "../services/api"; // Import API function to fetch todos
import TodoItem from "./TodoItem";
import TodoTableHeader from "./TodoTableHeader";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the backend when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos(); // Call API function to fetch todos
        setTodos(fetchedTodos);
        console.log(fetchedTodos[0].completed);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {/* <h2>Todos</h2> */}
      <TodoTableHeader />
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
