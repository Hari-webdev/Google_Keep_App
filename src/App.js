import React from 'react'
import Header from './header'
import CreateArea from './CreateArea'
import { useState } from 'react'
import Note from './newnode'
import "./App.css"


const App = () => {
  const [notes, setNotes] = useState([]);
  
  function addNotes(e) {
    setNotes((prevNotes)=>{
      return [...prevNotes, e];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes)=>{
      return prevNotes.filter((item,index)=>{
        return index!==id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNotes} />
      {notes.map((noteItem,index)=>{
        return (
          <Note key={index} title={noteItem.title} content={noteItem.content} 
          deleteNote={deleteNote}
          id={index}/>
        )
      })}
    </div>
  )
}

export default App;