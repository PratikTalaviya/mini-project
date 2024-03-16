// TodoTableHeader.js
import React from "react";

const TodoTableHeader = () => {
  return (
    <thead className="align-bottom">
      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
        <th className="w-1/4 pb-3 text-center min-w-[175px]">TODO</th>
        <th className="w-1/4 pb-3 text-center min-w-[175px]">STATUS</th>
        <th className="w-1/4 pb-3 text-center min-w-[175px]">PRIORITY</th>
        <th className="w-1/4 pb-3 text-center min-w-[175px]">CREATION DATE</th>
      </tr>
    </thead>
  );
};

export default TodoTableHeader;
