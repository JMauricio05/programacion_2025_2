<?php
$hostDB = "localhost";
$userDB = "root";
$pwdDB = "";
$nameDB = "examen_pr2";
//$portDB = "3306";

$conexDB = new mysqli($hostDB, $userDB, $pwdDB, $nameDB);

if($conexDB->connect_error){
    echo "Error en la conexión";
    die();
}

echo "Conexión exitosa";
echo '<br>';
$sql = "select * from personas";
$resDB = $conexDB->query($sql);

if($resDB->num_rows>0){
    while($row = $resDB->fetch_assoc()){
        echo $row['id'] . " " . $row['nombre'] . " ". $row['email']. " ". $row['edad'];
        echo '<br>';
    }
}


$conexDB->close();
