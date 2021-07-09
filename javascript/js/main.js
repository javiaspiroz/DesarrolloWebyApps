window.onload = function() {
    
    /*var h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = "¡Hola Mundo!";
    */

    //forma 2
    var titulo = document.getElementById("titulo");
    titulo.innerHTML = "¡Hola Mundo!";

    // Ejemplo de MDN Web docs, uso de let y var
    function varTest() {
        var x = 31;
        if (true) {
          var x = 71;  // ¡misma variable!
          console.log(x);  // 71
        }
        console.log(x);  // 71
      }
      
      function letTest() {
        let x = 31;
        if (true) {
          let x = 71;  // variable diferente
          console.log(x);  // 71
        }
        console.log(x);  // 31
      }
      // llamamos a las funciones
      varTest();
      letTest();

      function letTest2() {
        let x = 31;
        if (true) {
          x = 71;  // Actualizo variable
          console.log(x);  
        }
        console.log(x);  
      }

      function varTest2() {
        var x = 31;
        if (true) {
          x = 71;  // Actualizo variable 
          console.log(x);  
        }
        console.log(x);  
      }
      letTest2();
      varTest2();
      
    function varLetTest() {
        var x = 31;
        if (true) {
          let x = 71;  // Actualizo variable 
          console.log(x);  
        }
        console.log(x);  
      }
      varLetTest();

      function sumar(a,b){
        let suma = a+b;
        console.log(a+'+'+b+' = '+suma);
      }
      sumar('Ana','Corrales');
      sumar(20,30);
      sumar('Ana',50);
}

