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

    public function save()
    {
        $sql = "insert into personas (nombre,email,edad) values ";
        $sql .= "('" . $this->name . "','" . $this->email . "'," . $this->age . ")";
        $conex = new ConexDB();
        $resultDb = $conex->execSQL($sql);
        $conex->close();
        return $resultDb;
    }

    public function update()
    {
        $sql = "update personas set ";
        $sql .= "nombre='" . $this->name . "',";
        $sql .= "email='" . $this->email . "',";
        $sql .= "edad=" . $this->age;
        $sql .= " where id=" . $this->id;
        $conex = new ConexDB();
        $resultDb = $conex->execSQL($sql);
        $conex->close();
        return $resultDb;
    }

    public function delete()
    {
        $sql = "delete from personas where id=" . $this->id;
        $conex = new ConexDB();
        $resultDb = $conex->execSQL($sql);
        $conex->close();
        return $resultDb;
    }
}
