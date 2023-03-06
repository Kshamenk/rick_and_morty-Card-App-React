import React, { useState } from "react";
import validation from "./validation.js";
import styles from './Form.module.css'
// resolver act 2
export default function Form() {

   
    const [userData, setUserData] = useState(
        { username: '', password: '' });

    const [errors, seterrors] = useState( 
        { username: '', password: '' })    


    function handleInputChange(event) {
        const property = event.target.name
        const value = event.target.value
        setUserData({
            ...userData,
            [property] : value
        })
        seterrors(validation({
            ...userData,
            [property] : value
        }))
    }


    return (
        <div className={styles.contenedor}>
            <form >
                <div className={styles.user}>
                    <label htmlFor="username">User Name: </label>
                    <input
                        type="text"
                        name='username'
                        value={userData.username}
                        placeholder='Ingrese un Usuario'
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.pass}>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        placeholder='Ingrese su contreseña'
                        onChange={handleInputChange} />
                </div>
                <div className={styles.button}>
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}