import React, { useState, useEffect } from 'react'; 
import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";


export const Route = createFileRoute('/note/$note')({
  component: Note,
});

async function fetchNoteId(id: string) {
  const dataBody = await fetch(`/api/note/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await dataBody.json();
  console.log(data);

  return data;
}

async function saveToDatabase(id: string, content: string) {
  try {
    const dataBody = await fetch(`/api/note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ note: content }), // Ensure payload matches expected format
    });

    if (!dataBody.ok) {
      throw new Error('Failed to save data to the database'); // Throw error if response status is not ok
    }

    const data = await dataBody.json();
    console.log(`PUT ${data}`);

    return data;
  } catch (error) {
    console.error('Error saving data to the database:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}

function Note() {
  const { note } = Route.useParams();
  const [text, setText] = useState(""); 


  useEffect(() => {
    async function fetchDataAsync() {
      const noteInfo = await fetchNoteId(note);
      setText(await noteInfo.note.note);
      console.log(noteInfo);
    }
    
    fetchDataAsync();
  }, [note]);
  
  useEffect(() => {
    async function saveAsync() {
      const noteData = await fetchNoteId(note);
      if(noteData !== text && text) {
        const noteInfo = await saveToDatabase(note, text);
        console.log(noteInfo);
      } else if( !text && text !== noteData) {
        const noteInfo = await saveToDatabase(note, text);
        console.log(noteInfo);
      }
  

    }

    saveAsync();
  }, [text, note]);


  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => { 
    event.preventDefault();
    setText(event.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <textarea className="col-span-1 my-4 h-screen p-4" value={text} onChange={handleTextChange}></textarea>
        <section className="col-span-1 h-screen shadow-lg bg-gray-50 p-4 overflow-hidden overflow-y-auto">
          <ReactMarkdown>{text}</ReactMarkdown>
        </section>
      </div>
    </>
  );
}

export default Note;
