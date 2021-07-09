<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>I love coffee - Contacto</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="_css/styles.css">
</head>
<body>
    <p><b>Nombre:</b> <?php echo $_POST["fname"];?></p>
    <p><b>Apellido:</b> <?php echo $_POST["lname"];?></p>
    <p><b>Email:</b> <?php echo $_POST["email"];?></p>
    <?php
        if ($_POST["year"]!=null)
            echo "<p><b>Año de nacimiento:</b>", $_POST["year"], "</p>"
    ?>
    <p><b>País:</b> <?php echo $_POST["country"];?></p>
    <p><b>Asunto:</b> <br><?php echo $_POST["subject"];?></p>
    

</body>
</html>