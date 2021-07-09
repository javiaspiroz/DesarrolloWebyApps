//Creamos element h1
var h = document.createElement("h1")
//Creamos el nodo de tipo texto y su contenido
var t = document.createTextNode("Título creado con JS");
//El nodo texto lo asignamos como nodo hijo de h1
h.appendChild(t);
document.body.appendChild(h);