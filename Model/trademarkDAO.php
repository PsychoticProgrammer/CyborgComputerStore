<?php
    class TRADEMARK_DAO{
        public static function select(){
            $connection = Connection::getConnection();

            $sql="SELECT trademark_code code, trademark_name `name`, trademark_description `description` " . 
                "FROM trademarks";

            $preparedStatement = $connection->prepare($sql);
            if(!$preparedStatement->execute()){
                die("An error occurred when trying to get Data from table");
            }
            $data = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
        }
    }
?>