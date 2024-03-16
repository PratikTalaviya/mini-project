// // TodoItem.jsx
// import React from "react";

// const TodoItem = ({ todo }) => {
//   return (
//     <tr className="border-b border-dashed last:border-b-0">
//       <td className="p-3 pl-0">
//         <div className="flex items-center">
//           <div className="flex flex-col justify-start">
//             <a
//               href="javascript:void(0)"
//               className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
//             >
//               {todo.name}
//             </a>
//           </div>
//         </div>
//       </td>
//       <td className="p-3 pr-0 text-end">
//         <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
//           {todo.status}
//         </span>
//       </td>
//       <td className="p-3 pr-0 text-end">
//         <span className="font-semibold text-light-inverse text-md/normal">{todo.priority}</span>
//       </td>
//       <td className="p-3 pr-12 text-end">
//         <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
//           <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">Edit</span>
//         </button>
//       </td>
//       <td className="p-3 pr-0 text-end">
//         <span className="font-semibold text-light-inverse text-md/normal">{todo.description}</span>
//       </td>
//     </tr>
//   );
// };

// export default TodoItem;
// TodoItem.js
// TodoItem.js
// TodoItem.js
import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr className="border-b border-dashed last:border-b-0" onClick={toggleExpand}>
        <td className="p-3 text-center pl-0">{todo.title}</td>
        <td className="p-3 text-center">{todo.completed ? "completed" : "In Progress"}</td>
        <td className="p-3 text-center">{todo.priority}</td>
        <td className="p-3 text-center">{todo.createdAt}</td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan="4" className="p-3 pl-0">
            {todo.description}
            <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
            <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onEdit(todo)}>
              Edit
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default TodoItem;
