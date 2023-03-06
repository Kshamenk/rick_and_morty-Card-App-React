function validation({username,password }) {
    const errors = {}
   if (username.length < 5) errors.username = 'Usuario invalido'
   if (password.length < 5) errors.password = 'Contraseña invalida'
   return errors
}

export default validation

