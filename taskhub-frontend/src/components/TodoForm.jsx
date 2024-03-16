// import React, { useContext, useState } from "react";
// import { createTodo } from "../services/api";
// import UserContext from "../context/UserContext";
// import { toast } from "react-hot-toast";

// const TodoForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("Low");
//   const { user } = useContext(UserContext);
//   const userId = user;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createTodo(userId, { title, description, priority });
//       console.log(response.data);
//       toast.success("Todo Saved!!");

//       // Optionally, handle success response
//     } catch (error) {
//       console.error("Error creating todo:", error);
//       toast.error("Not Saved!!");
//       // Optionally, handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Description"
//       ></textarea>
//       <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// };

// export default TodoForm;
import React, { useContext, useState } from "react";
import { createTodo } from "../services/api";
import UserContext from "../context/UserContext";
import { toast } from "react-hot-toast";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const { user } = useContext(UserContext);
  const userId = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTodo({ title, description, priority });
      console.log(response.data);
      toast.success("Todo Saved!!");
      setTimeout(() => {
        location.reload();
      }, 1000);
      setTitle("");
      setDescription("");
      setPriority("");
      // Optionally, handle success response
    } catch (error) {
      console.error("Error creating todo:", error);
      toast.error("Not Saved!!");
      // Optionally, handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo"
        required
        className="block w-full mb-2 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="block w-full mb-2 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      ></textarea>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="block w-full mb-2 px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
      >
        <option value="Priority" disabled selected>
          Select Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button
        type="submit"
        className="w-full text-[.925rem]  text-[#352F44] inline-flex justify-center border-2 border-[#352F44] py-2 px-4 shadow-sm text-sm font-medium rounded-xl hover:text-[#fff] hover:bg-[#352F44] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:text-[#fff]"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
