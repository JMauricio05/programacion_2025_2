<?php

interface Model
{
    function get($prop);
    function set($prop, $value);
}

abstract class Persona implements Model
{
    protected $nombre = null;
    private $apellido = null;
    private $email = null;

    abstract function toString();

    function nombreCompleto()
    {
        return $this->nombre . ' ' . $this->apellido;
    }

    function get($prop)
    {
        return $this->{$prop};
    }

    function set($prop, $value)
    {
        $this->{$prop} = $value;
    }
}

class Estudiante extends Persona
{
    function toString()
    {
        $nombre = $this->nombre;
        $apellido = $this->get('apellido');
        $email = $this->get('email');
        return "$nombre $apellido $email";
    }
}

class Docente extends Persona{

    function __construct($nombre, $apellido)
    {
        $this->set('nombre', $nombre);
        $this->set('apellido', $apellido);
        $this->set('email', "sin definir");
    }
    
    function toString()
    {
        $nombre = $this->nombreCompleto();
        $email = $this->get('email');
        return "$nombre $email";
    }
}

// $estudiante = new Estudiante();
// $estudiante->set('nombre', 'Pedro');
// $estudiante->set('apellido', 'Picapiedra');
// $estudiante->set('email', 'pedro@test.com');

// echo $estudiante->toString() . '<br>';

// $docente = new Docente("Ana", "Gomez");
// echo $docente->toString() . '<br>';
// $docente->set('email', 'ana@test.com');
// echo $docente->toString() . '<br>';
