import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false); //pide que seteemos acess en false
  const username = 'ejemplo@gmail.com';
  const password = '1password';
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {  //f para setear los charid
    setCharacters(characters.filter((char) => char.id !== id));
  }

  function login(userData) {
    if (userData.password === password && userData.username === username) { // digo que si coinciden el estado con el input, se envia el formulario
      setAccess(true); //porque ahora acces es true
      navigate('/home');
    }
  }

  const location = useLocation();  //redirigir al usuario a la URL que establecimossss

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]); //el array de

  return (
    <div className="App" style={{ padding: "25px" }}>
      {!access && <Form onLogin={login} />}    
      {access && location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;