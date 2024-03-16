import React from "react";

function DashboardHome() {
  const sampleProjects = [
    { name: "Project 1", timeleft: "6 weeks", completion: 40 },
    { name: "Project 2", timeleft: "8 weeks", completion: 20 },
    { name: "Project 3", timeleft: "2 week", completion: 80 },
    { name: "Project 4", timeleft: "4 week", completion: 50 },
    { name: "Project 5", timeleft: "1 week", completion: 90 },
  ];
  return (
    <div className="h-screen w-[75vw] overflow-auto pl-5 pt-9 pr-0">
      <h1 className="text-3xl">Hello, Pratik </h1>
      <p className="text-xl">Hope you have great day, Let's see what's new task for you...</p>
      <div className="pl-[10vw] pt-[3vw]  mt-10 h-full w-[72vw] rounded-xl bg-[#fffff4]">
        <h3 className="mb-10 text-2xl">Projects in Progress</h3>
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
            <div className="relative bg-clip-border overflow-hidden bg-[#F4EEFF] text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
              <div>
                <h6 className="block font-semibold text-base text-blue-gray-900 mb-1">Projects</h6>
                <p className="text-sm flex items-center gap-1 text-blue-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-blue-500"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <strong>30 done</strong> this month
                </p>
              </div>
              <button
                aria-expanded="false"
                aria-haspopup="menu"
                className="relative middle none font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                type="button"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currenColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="p-6 overflow-x-scroll  bg-[#F4EEFF]">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
                    </th>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block text-[11px] font-medium uppercase text-blue-gray-400">timeLeft</p>
                    </th>
                    <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                      <p className="block text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Mapping sample projects to table rows */}
                  {sampleProjects.map((project, index) => (
                    <tr key={index}>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block text-sm font-bold text-blue-gray-900">{project.name}</p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block text-xs font-medium text-blue-gray-600">{project.timeleft}</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="w-10/12">
                          <p className="mb-1 block text-xs font-medium text-blue-gray-600">{project.completion}%</p>
                          <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                            <div
                              className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                              style={{ width: `${project.completion}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
