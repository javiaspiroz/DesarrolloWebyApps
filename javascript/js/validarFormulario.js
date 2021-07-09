function validarFormulario( form ) {
    var motivo = "";
    motivo  +=  validarUsuario(  form.username  );
    motivo  +=  validarClave( form.pwd );
    if (motivo != "") {
        alert("Algunos campos no son correctos:\n" + motivo);
        return false;
    }
    return true;
}

function validarUsuario( campo ) { var error = "";
    var ilegales = /\W/; // Solo permitimos letras, números y guiones bajos 
    if (campo.value == "") {
        campo.style.background = 'Yellow';
        error = "No introdujiste el nombre de usuario.\n";
    }
    else if ((campo.value.length < 5) || (campo.value.length > 15)) {
        campo.style.background = 'Yellow';
        error = "El nombre de usuario tiene que tener más de 5 caracteres y menos de 15.\n";
    }
    else if (ilegales.test(campo.value)) {
        campo.style.background = 'Yellow';
        error  =  "El  nombre  de  usuario  contiene  caracteres  ilegales.\n"; 
    }
    else { 
        campo.style.background = 'White';
    }
    return error;
}

function validarClave( campo ) { var error = "";
    var ilegales = /[\W_]/; // Solo permitimos letras y números
    if (campo.value == "") {
        campo.style.background = 'Yellow';
        error = "No introdujiste tu clave.\n";
    } else if ((campo.value.length < 7) || (campo.value.length > 15)) {
        error  =  "La  clave  tiene  que  tener  entre  7  y  15  caracteres. \n";
        campo.style.background = 'Yellow';
    } else if (ilegales.test(campo.value)) {
        error  =  "La  clave  contiene  caracteres  ilegales.\n";
        campo.style.background = 'Yellow'; }
    else {
        campo.style.background = 'White';
    }
    return error;
}