'use strict'
class ValidadorFormulario {
    constructor(formid) {
        this.form = document.getElementById(formid);
        // seleccionar los inputs
        this.nombre = document.getElementById('nombre');
        this.apellido = document.getElementById('apellido');
        this.ciudad = document.getElementById('ciudad');
        this.email = document.getElementById('email');
        this.contrasena = document.getElementById('contrasena');

        //Seleccionar span de error

        this.nombreError = document.getElementById('nombreError');
        this.apellidoError = document.getElementById('apellidoError');
        this.ciudadError = document.getElementById('ciudadError');
        this.emailError = document.getElementById('emailError');
        this.contrasenaError = document.getElementById('contrasenaError');

    
        //Escuchar los eventos del usuario
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();  // evitar el envío de formulario por defecto
 
            if (this.validarFormulario()) {
                alert('enviando informacion')
            }
        });

    }
    validarFormulario() {
        console.log ('Ingreso al método');
        let valid = true;
        if (this.nombre.value === "") {
            this.nombreError.textContent = "El nombre del usuario es obligatorio";
            this.nombre.classList.add("error-imput");
            valid = false;
        } else {
            this.nombreError.textContent = "";
            this.nombre.classList.remove("error-imput");
        }
    
        if (this.apellido.value === "") {
            this.apellidoError.textContent = "El apellido del usuario es obligatorio";
            this.apellido.classList.add("error-imput");
            valid = false;
        } else {
            this.apellidoError.textContent = "";
            this.apellido.classList.remove("error-imput");
        }
            
        if (this.ciudad.value === "") {
            this.ciudadError.textContent = "El campo ciudad es obligatorio";
            this.ciudad.classList.add("error-imput");
            valid = false;
        } else {
            this.ciudadError.textContent = "";
            this.ciudad.classList.remove("error-imput");
        }

        if (this.email.value === "") {
            this.emailError.textContent = "El campo email es obligatorio";
            this.email.classList.add("error-imput");
            valid = false;
        } else {
            this.emailError.textContent = "";
            this.email.classList.remove("error-imput");
        }

        if (this.contrasena.value === "") {
            this.contrasena.textContent = "El campo Contraseña es obligatorio";
            this.contrasena.classList.add("error-imput");
            valid = false;
        } else {
            this.contrasenaError.textContent = "";
            this.contrasena.classList.remove("error-imput");
        }
        return valid;
    }


}