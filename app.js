function signUpFunc() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    const contraseñaConfirmacion = document.getElementById("contraseña-confirmacion").value;
    const codigoAcceso = document.getElementById("codigo-acceso").value;
  
    // Expresiones regulares para validar los datos
    const nombreRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
    const dniRegEx = /^\d{6,10}$/;
    const telefonoRegEx = /^\d{9}$/;
    const correoRegEx = /^\S+@\S+\.\S+$/;
    const contraseñaRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    // Validación de los datos
    if (!nombreRegEx.test(nombre)) {
      alert("El nombre no es válido");
      return;
    }
  
    if (!nombreRegEx.test(apellido)) {
      alert("El apellido no es válido");
      return;
    }
  
    if (!dniRegEx.test(dni)) {
      alert("El DNI no es válido");
      return;
    }
  
    if (edad < 18) {
      alert("Debes ser mayor de edad para registrarte");
      return;
    }
  
    if (!telefonoRegEx.test(telefono)) {
      alert("El teléfono no es válido");
      return;
    }
  
    if (!correoRegEx.test(correo)) {
      alert("El correo electrónico no es válido");
      return;
    }
  
    if (!contraseñaRegEx.test(contraseña)) {
      alert("La contraseña no es válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número");
      return;
    }
  
    if (contraseña !== contraseñaConfirmacion) {
      alert("Las contraseñas no coinciden");
      return;
    }
  
    // Almacenamiento de los datos en el LocalStorage
    const usuario = {
      nombre,
      apellido,
      dni,
      edad,
      telefono,
      correo,
      contraseña,
      codigoAcceso
    };
  
    localStorage.setItem(correo, JSON.stringify(usuario));
    
    console.log("Cuenta registrada");
  }
  
  function loginFunc() {
    const correo = document.getElementById("login-correo").value;
    const contraseña = document.getElementById("login-contraseña").value;
    const codigoAcceso = document.getElementById("login-codigo-acceso").value;
  
    // Validación del correo electrónico
    if (!localStorage.getItem(correo)) {
      alert("El correo electrónico no está registrado");
      return;
    }
  
    // Validación de la contraseña y el código de acceso
    const usuario = JSON.parse(localStorage.getItem(correo));
  
    if (contraseña !== usuario.contraseña) {
      alert("La contraseña es incorrecta");
      return;
    }
  
    if (codigoAcceso !== usuario.codigoAcceso) {
      alert("El código de acceso es incorrecto");
      return;
    }
  
    console.log("Cuenta logueada");
  }
  