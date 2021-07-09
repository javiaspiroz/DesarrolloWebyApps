var myImage = document.getElementById("mainImage");
var intervalHandle /*= setInterval(changeImage,250)*/; //dejo lo comentado si quiero que cambie simepre
var imageArray = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
var imageIndex = 0; //esto va a ser la imagen que muestro

function lanzarDado(){
    function changeImage() {
	    console.log(imageIndex);//imprimo la pos que va a salir del array de imagenes
	    myImage.setAttribute("src",imageArray[imageIndex]);
        imageIndex=Math.floor(Math.random() * 6);
    }
    // setInterval is also in milliseconds
    intervalHandle = setInterval(changeImage,250);//quito de aqui si quiero que cambie siempre
}

myImage.onclick =  function() {
    clearInterval(intervalHandle);
    //changeImage(); //cambio con intervalo fijado siempre
};

myImage.ondblclick =  function() {
    lanzarDado();
};