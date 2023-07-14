<?php

include("mysqlConnection.php");
class PersonDao
{


     public static function select(Person $person)
     {
          $connection =Connection::getConnection();

          $name= $person->getUsername();
          $password = $person->getPassword();
          
          $query = "SELECT * FROM person WHERE username='$name' and passwordp='$password'";
          $preparedStatement = $connection->prepare($query);
          $preparedStatement->execute();
          $preparedStatement->fetch();
          $rows = $preparedStatement->rowCount();
          print_r(json_encode($rows));
     }

     public static function insert()
     {
          $connection = Connection::getConnection();

          $name = $_POST['username'];
          $password = $_POST['pwd'];

          $query = "INSERT INTO person(username, passwordp) VALUES ('$name', '$password')";
          $preparedStatement = $connection->prepare($query);
          $preparedStatement->execute();
          $msg= "user inserted succesfully";
          print_r(json_encode($msg));
     }
}
