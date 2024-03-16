// // TodoList.jsx
// import React from "react";
// import TodoItem from "./TodoItem";

// const TodoTable = ({ todos }) => {
//   return (
//     <table className="w-full my-0 align-middle text-dark border-neutral-200">
//       <thead className="align-bottom">
//         <tr className="font-semibold text-[0.95rem] text-secondary-dark">
//           <th className="pb-3 text-start min-w-[175px]">TODO</th>
//           <th className="pb-3 text-end min-w-[100px]">STATUS</th>
//           <th className="pb-3 text-end min-w-[100px]">PRIORITY</th>
//           <th className="pb-3 pr-12 text-end min-w-[175px]">EDIT</th>
//           <th className="pb-3 pr-12 text-end min-w-[100px]">DESCRIPTION</th>
//         </tr>
//       </thead>
//       <tbody>
//         {todos.map((todo) => (
//           <TodoItem key={todo.id} todo={todo} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TodoTable;
// TodoTable.js;
import React from "react";
import TodoTableHeader from "./TodoTableHeader";
import TodoList from "./TodoList";

const TodoTable = () => {
  return (
    <table className="ml-12 my-10 w-full my-0 align-middle text-dark border-neutral-200">
      <TodoList />
    </table>
  );
};

export default TodoTable;
