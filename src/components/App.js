import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import CreateArea from './CreateArea';
import Footer from './Footer';

function App() {

  const [notesArray, setNotesArray] = useState([]);

  function addNote(note) {
    setNotesArray((prevValue) => {
      return [...prevValue, note]
    });
  }

  function deleteNotes(id) {
    setNotesArray((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
