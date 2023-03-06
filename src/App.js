import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Cards from './components//Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/Detail.jsx'
import About from './components/About/About.jsx'
import Form from './components/Form/Form';
//import characters from './data.js';

function App() {
  const [characters, setCharacters] = useState([])

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id))
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch} />
      <Routes>
       <Route exact path='/' element={<Form/>} />
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} /> 
        <Route path='/detail/:detailId' element={<Detail />}/> 
        <Route path='/about' element={<About/>} />
      </Routes>

    </div>
  );
}

export default App;
