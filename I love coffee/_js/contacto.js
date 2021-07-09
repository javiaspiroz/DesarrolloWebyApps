$(document).ready(function() {
    $("#contact-form").validate({
      rules: {
        fname : {
          required: true,
          minlength: 3
        },
        lname : {
          required: true,
          minlength: 3
        },
        year: {
          number: true,
          min: 1900,
          max: 2020
        },
        email: {
          required: true,
          email: true
        },
        subject: {
          required: true,
          minlength: 50
        }
      },
      messages : {
        fname: {
          required: "Rellene el campo",
          minlength: "El nombre debería tener al menos 3 caracteres"
        },
        lname: {
          required: "Rellene el campo",
          minlength: "El nombre debería tener al menos 3 caracteres"
        },
        year: {
          number: "Por favor, ingrese un valor numérico",
          min: "Introduzca un año realista",
          max: "Introduzca un año realista"
        },
        email: {
          email: "El formato del email debe ser example@email.com",
          required: "Rellene el campo"
        },
        subject: {
          required: "Rellene el campo",
          minlength: "La longitud del texto debe ser mínimo 50 caracteres"
        }
      }
    });
  });