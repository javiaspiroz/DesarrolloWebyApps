var elemento = document.getElementById("contenido");
//Información acerca del nodo
console.log("Este nodo es de tipo", elemento.nodeName);
console.log("Contenido HTML del tag", elemento.innerHTML);

//Saber el nº de links del documento
var num_links = document.getElementsByTagName("a");
console.log("Número de links que hay en el documento", num_links.length)

//Acceder a los elementos de una clase específica

elementos = document.getElementsByClassName("negrita");
console.log("Valor del primer elemnto de la clase 'negrita'", elementos[0].innerHTML);

//Cuántos item tiene la lista
var lista = document.getElementById("lista1");
var items = lista.getElementsByTagName("li");
console.log("Número de items que hay en la lista", items.length);

//Valor del último elemento de  la lista
console.log("El contenido del último elemento de la lista es ", items[items.length-1].innerHTML);