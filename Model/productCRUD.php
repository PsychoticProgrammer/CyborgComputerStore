<?php
    class PRODUCT_CRUD{
        public static function selectByCode($code){
            $connection = Connection::getConnection();

            $sql =
            "SELECT p.code code, p.`name` `name`, p.model model, p.price price, " . 
                "p.`description` `description`, p.`image` `image`, t.trademark_name trademarkName, p.size size, " . 
                "p.unique_char `string`, p.generation gen, p.cycles cycles" .
                "FROM products p " . 
                "WHERE p.code = $code";

            $preparedStatement = $connection->prepare($sql);
            if(!$preparedStatement->execute()){
                die("An error occurred when trying to get Data from table");
            }
            $data = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
        }
    }
?>