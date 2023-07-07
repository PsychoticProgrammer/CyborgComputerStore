<?php
    class COMPU_DAO {
        public static function select(){
            $connection = Connection::getConnection();

            $sql = "SELECT DISTINCT p.code `code`, p.`name` `name`, p.model model, p.price price, " . 
            "p.`description` `description`, p.`image` `image`, t.trademark_name trademarkName " .
            "FROM products p " . 
            "JOIN computers c ON c.computer_code = p.code " .
            "JOIN trademarks t ON t.trademark_code = p.trademark";
            
            $preparedStatement = $connection->prepare($sql);
            if(!$preparedStatement->execute()){
                die("An error occurred when trying to get Data from table Computer");
            }
            $computers = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);

            for($i = 0; $i < count($computers); $i++){
                $sql = 
                "SELECT p.code `code`, p.`name` `name`, p.model model, p.price price, " . 
                "p.`description` `description`, p.`image` `image`, t.trademark_name trademarkName, p.size size, " . 
                "p.unique_char `string`, p.generation gen, p.cycles cycles " .
                "FROM products p" . 
                " JOIN computers c  ON c.computer_code=" . $computers[$i]['code'] . 
                " AND c.product_code = p.code " . 
                "JOIN trademarks t ON t.trademark_code = p.trademark";

                $preparedStatement = $connection->prepare($sql);
                if(!$preparedStatement->execute()){
                    die("An error occurred when trying to get Data from table Computer");
                }
                $products = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
                $computers[$i]['components'] = $products;
            }

            echo json_encode($computers);
        }
    }
?>