import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";
const userId = localStorage.getItem("userId");
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: userId,
    "Content-Type": "application/json",
  },
});

export const createNote = async (userId, noteData) => {
  console.log(noteData);
  try {
    const response = await api.post(`/notes/${userId}`, noteData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getNotes = async (userId) => {
  try {
    const response = await api.get(`/notes/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateNote = async (noteId, noteData) => {
  try {
    const response = await api.put(`/notes/${noteId}`, noteData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await api.delete(`/notes/${noteId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createTodo = async (todoData) => {
  try {
    const response = await api.post("/todos", todoData);
    return response.data;
  } catch (error) {
    throw new Error("Error creating todo:", error);
  }
};

export const getTodos = async () => {
  try {
    const response = await api.get("/todos");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching todos:", error);
  }
};

export const getTodoById = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching todo:", error);
  }
};

export const updateTodo = async (id, todoData) => {
  try {
    const response = await api.put(`/todos/${id}`, todoData);
    return response.data;
  } catch (error) {
    throw new Error("Error updating todo:", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error deleting todo:", error);
  }
};
export default api;
