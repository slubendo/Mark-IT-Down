import React, { useState } from 'react'; // Import useState from React
import { createFileRoute } from '@tanstack/react-router'
import Markdownit from 'markdown-it'



export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [text, setText] = useState(""); 

  const handleTextChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => { 
    event.preventDefault()
    setText(event.target.value);
  };

  const md = new Markdownit();
  const renderText = md.render(text)

  return (
    <div className=''>
      <h3 className=''>Welcome home!</h3>
      <div contentEditable={true} onBlur={(e) => setText(e.target.innerText)} dangerouslySetInnerHTML={{ __html: renderText }}></div> 
    </div> 
  );
  
  
}