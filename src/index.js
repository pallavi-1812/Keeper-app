import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,
  document.getElementById('root')
);


