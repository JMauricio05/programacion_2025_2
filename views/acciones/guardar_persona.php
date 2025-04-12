<?php
include '../../models/drivers/conexDB.php';
include '../../models/entities/entity.php';
include '../../models/entities/person.php';
include '../../controllers/personsController.php';

use app\controllers\PersonsController;

$controller = new PersonsController();
$result = empty($_POST['idInput'])
    ? $controller->saveNewPerson($_POST)
    : $controller->updatePerson($_POST);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de la opreación</title>
</head>

<body>
    <h1>Resultado de la opreación</h1>
    <?php
    if ($result) {
        echo '<p>Datos guardados</p>';
    } else {
        echo '<p>No se pudo guardar los datos</p>';
    }
    ?>
    <a href="../persons.php">Volver</a>
</body>

</html>