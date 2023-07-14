<?php

include("../../Model/personDao.php");
include("../../Model/person.php");
// include("../Model/personDao.php");
// include("../Model/person.php");
$type= $_SERVER["REQUEST_METHOD"];

switch($type){
    case "GET":
        PersonDao::select(new Person($_GET['username'], $_GET['pwd']));
        break;
    case "POST":
        PersonDao::insert();
        break;
}