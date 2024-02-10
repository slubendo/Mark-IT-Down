import React from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";


// @ts-ignore
export const Route = createRootRoute({
  component: Root,
});

function Root() {
  
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        {/* params need a loop/map */}
        <Link to="/note/$note" params={{ note: '123' }}>
          Note
        </Link>{' '}
        <Link to="/notebook/$notebook" params={{ notebook: '123' }}>
          Notebook
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
    </>
  );
}
