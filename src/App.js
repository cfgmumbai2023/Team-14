import React, { useState } from "react";
import Header from "../myapp/components/Header";
import Footer from "../myapp/components/Footer";
import Note from "../myapp/components/Note";
import CreateArea from "../myapp/components/CreateArea";
import Navbarr from "./Navbar";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // return (
  //   <div>
  //     <Header />
  //     <CreateArea onAdd={addNote} />
  //     {notes.map((noteItem, index) => {
  //       return (
  //         <Note
  //           key={index}
  //           id={index}
  //           title={noteItem.title}
  //           content={noteItem.content}
  //           onDelete={deleteNote}
  //         />
  //       );
  //     })}
  //     <Footer />
  //   </div>
  // );

  return (
    <div>
      <Navbarr />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
