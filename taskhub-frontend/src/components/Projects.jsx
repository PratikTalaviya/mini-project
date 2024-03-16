import React from "react";

// Reusable Card component
function ProjectCard({ title, team, timeLeft, progress }) {
  return (
    <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
      <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        ></svg>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold my-2">{title}</p>
        <div className="flex space-x-2 text-gray-400 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
          <p>{team}</p>
        </div>
        <div className="flex space-x-2 text-gray-400 text-sm my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
          <p>{timeLeft}</p>
        </div>
        <div className="border-t-2 " />
        <div className="flex justify-between">
          <p class="font-semibold text-base mb-2">Progress</p>
          <div class="text-base text-gray-400 font-semibold">
            <p>{progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex items-center justify-center h-screen w-[75vw] overflow-auto p-5 pt-9">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {/* Card 1 */}
        <ProjectCard title="App Development" team="Marketing Team" timeLeft="1 Week Left" progress="34%" />
        {/* Card 2 */}
        <ProjectCard title="Web Design" team="Core UI Team" timeLeft="3 Weeks Left" progress="76%" />
        {/* Card 3 */}
        <ProjectCard title="Leading Page" team="Marketing Team" timeLeft="2 Days Left" progress="4%" />
        {/* Card 4 */}
        <ProjectCard title="Business Compare" team="Marketing Team" timeLeft="1 Month Left" progress="90%" />
      </div>
    </div>
  );
}

export default Projects;
