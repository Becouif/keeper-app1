
import React, { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote){
    // the newNote is coming from CreateArea and this pass as a props in submitNote function 
    // console.log(newNote);
    setNotes(prevNotes =>{
      return [...prevNotes, newNote];
    })

  }
  function deleteNote(id){
    setNotes(prevNotes => {
       return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return <Note onDelete={deleteNote} key={index} id={index} title={noteItem.title} content={noteItem.content} />
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
