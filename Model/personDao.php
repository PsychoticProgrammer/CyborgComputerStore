<?php

include("connectionDB.php");
class PersonDao
{


     public static function select(Person $person)
     {
          $clsCon = new Conecction();
          $con = $clsCon->getInstance()->getConnection();

          $name= $person->getUsername();
          $password = $person->getPassword();
          
          $query = "SELECT * FROM person WHERE username='$name' and passwordp='$password'";
          $preparedStatement = $con->prepare($query);
          $preparedStatement->execute();
          $preparedStatement->fetch();
          $rows = $preparedStatement->rowCount();
          print_r(json_encode($rows));
     }

     public static function insert()
     {
          $clsCon = new Conecction();
          $con = $clsCon->getInstance()->getConnection();

          $name = $_POST['username'];
          $password = $_POST['pwd'];

          $query = "INSERT INTO person(username, passwordp) VALUES ('$name', '$password')";
          $preparedStatement = $con->prepare($query);
          $preparedStatement->execute();
          $msg= "user inserted succesfully";
          print_r(json_encode($msg));
     }
}
