<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <title>Ejemplo en PHP</title>
</head>
<body>
    <p>Esto es un párrafo en HTML</p>
    <p><?php echo "Este otro párrafo es en PHP";?></p>
    <?php  $txt = "mi primer texto";
           echo "¡Este es $txt! <br>";
           echo "¡Este es" . $txt ." concatenado!\n";
    ?>
    <br><br>
    <form action="bienvenido.php" method="post">
        Name: <input type="text" name="name"><br>
        E-mail: <input type="text" name="email"><br>
        <input type="submit">
    </form>

    
    
</body>
</html>