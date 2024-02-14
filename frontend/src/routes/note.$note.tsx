import React, { useState, useEffect } from 'react'; 
import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";


export const Route = createFileRoute('/note/$note')({
  component: Note,
})

function Note() {
  const { note } = Route.useParams()

  const [text, setText] = useState(""); 

  const handleTextChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => { 
    setText(event.target.value);
  };

  console.log(text)

  return (
    <>
      <div className="grid grid-cols-2">
        <textarea className="col-span-1 h-screen p-4" value={text} onChange={handleTextChange}></textarea>
        <section className="col-span- h-screen shadow-lg bg-[#fcf9f9] p-4 overflow-hidden overflow-y-auto">
          <ReactMarkdown>{text}</ReactMarkdown>
        </section>
      </div>

    
    </>
  );
}

export default Note;
