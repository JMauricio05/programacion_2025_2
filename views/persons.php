<?php
include '../models/drivers/conexDB.php';
include '../models/entities/entity.php';
include '../models/entities/person.php';
include '../controllers/personsController.php';

use app\controllers\PersonsController;

$controller = new PersonsController();
$persons = $controller->queryAllPersons();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personas</title>
</head>

<body>
    <h1>Personas</h1>
    <br>
    <a href="form_person.php">Crear</a>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
                <th>Mayor edad</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($persons as $person) {
                echo '<tr>';
                echo '  <td>' . $person->get('name') . '</td>';
                echo '  <td>' . $person->get('email') . '</td>';
                echo '  <td>' . $person->get('age') . '</td>';
                echo '  <td>' . $person->mayorEdad() . '</td>';
                echo '  <td>';
                echo '      <a href="form_person.php?id=' . $person->get('id') . '">Modificar</a>';
                echo '      <a href="acciones/deletePerson.php?id=' . $person->get('id') . '">Eliminar</a>';
                echo '  </td>';
                echo '</tr>';
            }
            ?>
        </tbody>
    </table>
</body>

</html>