<!DOCTYPE HTML>  
<html>
  <head>
    <style>
      .error {color: #FF0000;}
    </style>
  </head>
<body>  

<?php
// Definimos las variables
$nombreErr = $emailErr = $generoErr = $websiteErr = "";
$nombre = $email = $genero = $comentario = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["nombre"])) {
    $nombreErr = "Nombre is required";
  } else {
    $nombre = test_input($_POST["nombre"]);
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }
    
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
  }

  if (empty($_POST["comentario"])) {
    $comentario = "";
  } else {
    $comentario = test_input($_POST["comentario"]);
  }

  if (empty($_POST["genero"])) {
    $generoErr = "genero is required";
  } else {
    $genero = test_input($_POST["genero"]);
  }
}

function test_input($data) {
  $data = trim($data);   //Elimina espacio en blanco (u otro tipo de caracteres) del inicio y el final de la cadena
  $data = stripslashes($data); //Quita las barras de un string \
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>PHP Form Validation </h2>
<p><span class="error">* required field /campo requerido</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Nombre: <input type="text" name="nombre">
  <span class="error">* <?php echo $nombreErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  Website: <input type="text" name="website">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Comentario: <textarea name="comentario" rows="5" cols="40"></textarea>
  <br><br>
  genero:
  <input type="radio" name="genero" value="mujer">Mujer
  <input type="radio" name="genero" value="hombre">Hombre
  <input type="radio" name="genero" value="other">Otro
  <span class="error">* <?php echo $generoErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">  
</form>

<?php
echo "<h2>Your Input:</h2>";
echo $nombre;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comentario;
echo "<br>";
echo $genero;
?>

</body>
</html>