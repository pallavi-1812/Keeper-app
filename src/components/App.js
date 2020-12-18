import React from 'react';
import Header from './Header';
import Note from './Note';
import Notes from '../notes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {Notes.map((note) => {
        return (
          <Note
            key={note.key}
            name={note.title}
            description={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
