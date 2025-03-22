<?php
// include 'clases.php';
require 'clases.php';

$estudiante = new Estudiante();
// $estudiante->set('nombre', $_POST['nombre']);
$estudiante->setNombre($_POST['nombre']);
$estudiante->set('apellido', $_POST['apellido']);
$estudiante->set('email', $_POST['correo']);
$estudiante->set('edad', $_POST['edad']);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Datos estudiante</title>
</head>

<body>
    <h1>Los datos del estudiante son:</h1>
    <div>
        <?php
        echo $estudiante->nombreCompleto();
        echo '<br>';
        ?>
        <br>
        <?php echo $estudiante->mayorEdad(); ?>
    </div>
</body>

</html>