import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute('/notebook/$notebook')({
  component: notebook,
})

function notebook() {
  // const { notebook } = Route.useParams()

    return (
      <div className='grid grid-rows-3'>
        <div className='row-span-1'>
          <img src='/DeskBanner.jpeg' alt='Desk Banner' className='object-fit w-full'/>
        </div>
        <div className='row-span-2'>
          <div className='py-2 px-4'>
            <h1 className='mb-0'>Welcome to MarkITDown</h1>
            <p>Are you ready to take notes and MarkItDown?</p>
          </div>
  
          <div className='px-10 py-2'>
            <p>Most Recent Notes</p>
            <div className='w-56 h-80 bg-slate-100'></div>
          </div>
  
        </div>
      </div> 
    );
}  