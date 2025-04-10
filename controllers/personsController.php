<?php

namespace app\controllers;

use app\models\entities\Person;

class PersonsController{

    public function queryAllPersons(){
        $person = new Person();
        $data = $person->all();
        return $data;
    }

}
