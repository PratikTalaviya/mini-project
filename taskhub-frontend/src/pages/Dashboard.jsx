import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { RxDashboard } from "react-icons/rx";
import { GoTasklist } from "react-icons/go";
import { FaProjectDiagram } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigateTo = useNavigate();
  const links = [
    { name: "Dashboard", icon: <RxDashboard />, link: "/dashboard" },
    { name: "Todos", icon: <GoTasklist />, link: "/dashboard/todos" },
    { name: "Notes", icon: <FaNoteSticky />, link: "/dashboard/notes" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "/dashboard/projects" },
  ];
  function handleLogout() {
    localStorage.removeItem("username");
    toast.success("Logout Successful!!");
    // console.log(localStorage.getItem("userId"));
    setTimeout(() => {
      navigateTo("/");
    }, 1000);
  }

  return (
    <div
      className="flex
     h-screen bg-[#F4EEFF] text-[#352F44]"
    >
      {/* Sidebar */}
      <div className="m-5 p-3 ml-10 bg-[#fff] text-[#352F44] w-1/5 rounded-xl">
        <div className="flex items-center justify-center text-5xl p-4 mb-5">TaskHub</div>
        {/* Sidebar links */}
        <ul className="flex gap-2 flex-col">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }) =>
                `flex items-center gap-5 h-16 p-5 hover:bg-[#F4EEFF] hover:rounded-xl text-2xl hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:rounded-xl active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 focus:rounded-xl active:text-blue-900 outline-none`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </ul>
        <button
          type="submit"
          className="w-full text-[.925rem] mt-10 text-[#352F44] inline-flex justify-center border-2 border-[#352F44] py-2 px-4 shadow-sm text-sm font-medium rounded-xl hover:text-[#fff] hover:bg-[#352F44] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:text-[#fff]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div>
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Dashboard;
