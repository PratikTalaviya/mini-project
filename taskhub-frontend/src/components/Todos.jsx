import React, { useState } from "react";
import TodoTable from "./TodoTable";
import TodoForm from "./TodoForm";

const Todos = () => {
  const [addClicked, setAddClick] = useState(false);
  function handleClick() {
    setAddClick(!addClicked);
  }

  return (
    <div className="flex flex-wrap -mx-3 mb-5 h-screen w-[75vw] overflow-auto p-5 pt-9">
      <div className="w-full max-w-full px-3 mb-6 mx-auto">
        <div className="p-10 relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                <span className="mr-3 font-semibold text-dark">Todo List</span>
                <span className="mt-1 font-medium text-secondary-dark text-lg/normal">Manage your tasks here</span>
              </h3>
              <div className="relative flex flex-wrap items-center my-2">
                <button
                  href="javascript:void(0)"
                  className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer text-[#352F44] border-2 border-[#352F44] hover:text-[#fff] hover:bg-[#352F44] rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  onClick={handleClick}
                >
                  Add Todo
                </button>
              </div>
            </div>
            {addClicked && (
              <div className="p-10">
                <TodoForm />
              </div>
            )}

            <div className="">
              <div className="overflow-x-auto">
                <TodoTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
