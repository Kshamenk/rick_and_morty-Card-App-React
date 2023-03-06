import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validation from './validation';
import style from '../Form/Form.module.css';

function Form(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleSubmit(e) {  //se ejecuta cuando se envía el formulario
    e.preventDefault();
    const errors = validation({ username, password });//utiliza la función validation para validar el formulario
    setErrors(errors);  
    if (Object.keys(errors).length === 0) {   //si no hay error, el form se envia
      const userData = { username, password };
      props.onLogin(userData);
      navigate('/home'); //redirecciona a /home
    }
  }

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style.user}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
          {errors.username && (
            <div className={style["error-message"]}>{errors.username}</div>
          )}
        </div>

        <div className={style.pass}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={style.pass}
          />
          {errors.password && (
            <div className={style["error-message"] }>{errors.password}</div>
          )}
        </div>

        <button className={style.button} type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;





