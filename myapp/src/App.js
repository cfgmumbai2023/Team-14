import './App.css';
import NavBar from './Navbar.js';
import Academics from './Academics.js';
import Criteria from './criteria';
import React, { useState } from "react";
import Header from "../myapp/components/Header";
import Footer from "../myapp/components/Footer";
import Note from "../myapp/components/Note";
import CreateArea from "../myapp/components/CreateArea";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


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

  return (
    <div>
      <Header />
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
      <Router>
    <div className="App">
      
      <NavBar/>
      <Academics/>
      <Criteria/>





















      
      <Routes> 
           <Route exact path="/criteria" element={<Criteria/>}/>
      </Routes>
      
    </div>
    </Router>
      <Footer />
    </div>
  );
}

export default App;


// import Sidebar from './sidebar';
// function App() {
//   return (
//     <Router>
//     <div className="App">
      
//       <NavBar/>
//       <Academics/>
//       <Criteria/>
//       <Routes> 
//            <Route exact path="/criteria" element={<Criteria/>}/>
//       </Routes>
      
//     </div>
//     </Router>
//   );
// }

export default App;
