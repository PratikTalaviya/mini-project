import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="w-screen h-[80vh] z-0">
            <img
              className="absolute right-[15vw] top-[25vh] lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/task-management-4721296-3931550.png?f=webp"
            />
            <img
              className="absolute top-[25vh] left-[15vw] rotate-40 lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/test-result-verified-11032329-8842078.png?f=webp"
            />
            <img
              className="absolute top-[15vh] left-[40vw] rotate-12 lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/task-deadline-4721444-3926032.png?f=webp"
            />
          </div>
          <div className="text-center lg:w-2/3 w-full pb-12 ">
            <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-gray-900">Welcome To TaskHub</h1>
            <p className="mb-4 text-xl leading-relaxed">
              At TaskHub, we've crafted the perfect blend of tools to help you conquer your day with ease. From
              organizing your tasks like a pro to jotting down those brilliant ideas that pop into your head at 3 AM,
              TaskHub has you covered.
            </p>
            <p className="mb-8  leading-relaxed">
              But wait, there's more! TaskHub isn't just about checking off boxes and crossing items off lists. It's
              also your creative haven, where your thoughts are free to roam and your ideas are given the spotlight they
              deserve. Our note-taking feature lets you capture those fleeting moments of brilliance and inspiration,
              ensuring that no genius idea goes unnoticed.
            </p>
            <div className="flex justify-center">
              <Link to={"/login"}>
                <button className="mr-auto ml-auto text-[1.6vw] w-[9vw] text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
