function validation({ username, password }) {
    const errors = {};
  
    // Validación del nombre de usuario
    if (!username) {
      errors.username = "El nombre de usuario es requerido";
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      errors.username = "El nombre de usuario debe ser un correo electrónico válido";
    } else if (username.length > 35) {
      errors.username = "El nombre de usuario no puede tener más de 35 caracteres";
    }
  
    // Validación de la contraseña
    if (!password) {
      errors.password = "La contraseña es requerida";
    } else if (!/\d/.test(password)) {
      errors.password = "La contraseña debe contener al menos un número";
    } else if (password.length < 6 || password.length > 10) {
      errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
  
    return errors;
  }
  
  export default validation;

