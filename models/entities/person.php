<?php

namespace app\models\entities;

use app\models\drivers\ConexDB;

class Person extends Entity
{
    protected $id = null;
    protected $name = "";
    protected $email = "";
    protected $age  = null;

    public function mayorEdad()
    {
        if ($this->age >= 18) {
            return 'Si';
        } else {
            return 'No';
        }
    }

    public function all()
    {
        $sql = "select * from personas";
        $conex = new ConexDB();
        $resultDb = $conex->execSQL($sql);
        $persons = [];
        if ($resultDb->num_rows > 0) {
            while ($rowDb = $resultDb->fetch_assoc()) {
                $person = new Person();
                $person->set('id', $rowDb['id']);
                $person->set('name', $rowDb['nombre']);
                $person->set('email', $rowDb['email']);
                $person->set('age', $rowDb['edad']);
                array_push($persons, $person);
            }
        }
        $conex->close();
        return $persons;
    }

    public function save(){}

    public function update(){}

    public function delete(){
        
    }
}
