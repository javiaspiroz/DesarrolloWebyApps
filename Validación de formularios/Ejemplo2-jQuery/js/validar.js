$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        age: {
          required: true,
          number: true,
          min: 18
        },
        email: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      },
      messages : {
        name: {
          minlength: "El nombre debería tener al menos 3 caracteres"
        },
        age: {
          required: "Edad es un valor requerido",
          number: "Por favor, ingrese un valor numérico",
          min: "Para ingresar debe tener al menos 18 años"
        },
        email: {
          email: "El formato del email debe ser abc@domain.tld"
        },
        weight: {
          required: "Si eres mayor de 50 debes ingresar tu peso",
          number: "Por favor, ingrese un valor numérico"
        }
      }
    });
  });