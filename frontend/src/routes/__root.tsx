import React, { useState, useEffect } from "react";
import { Outlet, Link } from "@tanstack/react-router";
import { createRootRoute } from "@tanstack/react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMagnifyingGlass, faPlus, faHouse, faFileLines } from '@fortawesome/free-solid-svg-icons';

export const Route = createRootRoute({
  component: Root,
});

async function fetchNote(){
  const dataBody = await fetch("/api/note/list/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await dataBody.json();
  console.log(data)

  return data
}

async function fetchNotebook(){
  const dataBody = await fetch("/api/notebook/list/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await dataBody.json();
  console.log(data)

  return data
}


function Root() {
  const [notes, setNotes] = useState([]);
  const [notebooks, setNotebooks] = useState([]);


  useEffect(() => {
    async function fetchDataAsync() {
      const resultNotes = await fetchNote();
      const resultNotebooks = await fetchNotebook();
      setNotes(resultNotes.note);
      setNotebooks(resultNotebooks);      
    }

    console.log(notes)

    fetchDataAsync();
  }, []);
  


  if (!notebooks || !notes) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div className="grid grid-cols-6 overflow-hidden">
        <div className="flex flex-col justify-start  bg-[#f2f2f2] col-span-1  h-screen">
          <div className="flex mx-3 mb-3">
            <img src="/MarkDown.png" alt="MarkITDown Logo" width={100} height={100}/>
            <span className="mt-16">MarkITDown</span>
          </div>
          <div>
            <div className="bg-[#e6e6e6] rounded-md mx-3 p-2 w-11/12">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input className="bg-[#e6e6e6]" placeholder="Search"></input>
            </div>
            <button className="bg-[#00a82d] flex justify-start text-white rounded-md m-3 p-2 w-11/12">
              <FontAwesomeIcon icon={faPlus} className="mt-1"/>New Note
            </button>
          </div>

          <div className="flex flex-col my-8">
            <div className="bg-[#e6e6e6] rounded-md mx-3 p-2 w-11/12">
              <FontAwesomeIcon icon={faHouse} />
              <Link to="/">Home</Link>
            </div>
            <div className="mx-5 my-2 p-2 rounded-md hover:bg-[#e6e6e6]">
                <FontAwesomeIcon icon={faFileLines} />
                <Link to={`/note/2` as "/note/$note"} params={{ note: "example" }}>.Example</Link>
            </div>    
            <div className="mx-5 p-2 rounded-md hover:bg-[#e6e6e6]">
                <FontAwesomeIcon icon={faFileLines} />
                <Link to={`/note/1` as "/note/$note"} params={{ note:"readMe" }}>ReadMe</Link>
            </div>

            <div className="border-b-2 rounded-md m-3 mb-4 p-2 w-11/12">
              <FontAwesomeIcon icon={faBook} />
              Notebooks
            </div>
            <div className="flex flex-col">
            {Array.isArray(notebooks) && notebooks.map((noteItem: any) => (
                <div key={noteItem.id}>
                    <Link to={`/notebook/${noteItem.id}` as "/notebook/$notebook"} params={{ notebook: noteItem.notebook }}>
                      <div className="mx-3 mb-1 p-2 rounded-md hover:bg-[#e6e6e6]">
                        <FontAwesomeIcon icon={faBook} />
                            {noteItem.notebook}
                      </div>
                    </Link>
                    {Array.isArray(notes) && notes.map((note: any) => (
                      note.notebookId === noteItem.id && (
                        <Link to={`/note/${note.id}` as "/note/$note"} params={{ note: note.title }}>
                            <div key={note.id} className="mx-5 p-2 rounded-md hover:bg-[#e6e6e6]">
                                <FontAwesomeIcon icon={faFileLines} />
                                  {note.title}
                            </div>
                        </Link>
                      )
                    ))}
                </div>
            ))}

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
