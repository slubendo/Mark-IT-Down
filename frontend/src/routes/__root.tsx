import React from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";


export const Route = createRootRoute({
  component: Root,
});

function Root() {
  
  return (
  <>
  <div className="grid grid-cols-6">

{/* bg-[#f2f2f2] */}
    <div className="flex flex-col justify-start  bg-[#f2f2f2] col-span-1  h-screen">
      <div className="flex mx-3 mb-3">
        <img src="/MarkDown.png" alt="MarkITDown Logo" width={100} height={100}/>
        <span className="mt-16">MarkITDown</span>
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <input className="bg-[#e6e6e6] rounded-md mx-3 p-2 w-11/12" placeholder="Search"></input >
        </div>
        <button className="bg-[#00a82d] text-white rounded-md m-3 p-2 w-11/12">New Note</button>
      </div>

      <div className="flex flex-col my-8">

        <div className="bg-[#e6e6e6] rounded-md mx-3 p-2 w-11/12">
        < Link to="/">Home</Link>
        </div>
        <div className="flex flex-col mx-3 p-2">
          {/* params need a loop/map */}
          <Link to="/notebook/$notebook" params={{ notebook: '123' }}>
            Notebook
          </Link>{' '}
          <div className="p-2">
          <Link to="/note/$note" params={{ note: '123' }}>
            Note
          </Link>{' '}
          </div>

        </div>
      </div>
    </div>
    
    <div className="col-span-5 h-screen">
      <Outlet/>
    </div>
  </div>
  </>
 );
}
