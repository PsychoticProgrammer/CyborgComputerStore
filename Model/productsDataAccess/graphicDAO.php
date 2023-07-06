<?php
    class GRAPHIC_DAO{

        public static function select(){

            $connection = Connection::getConnection();

            $sql = 
                "SELECT p.code code, p.`name` `name`, p.model model, p.price price, " . 
                "p.`description` `description`, p.`image` `image`, t.trademark_name trademarkName, p.size size " . 
                "FROM products p " . 
                "JOIN trademarks t ON " . 
                "t.trademark_code = p.trademark " . 
                "AND p.`name`='GRAPHIC CARD'";

            $preparedStatement = $connection->prepare($sql);
            if(!$preparedStatement->execute()){
                die("An error occurred when trying to get Data from table");
            }
            $data = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
        }
    }
?>