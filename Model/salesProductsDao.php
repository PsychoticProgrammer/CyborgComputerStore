<?php 
    
    include("person.php");

    class SalesProductDao{

        public static function select(SalesProducts $product){



        }

        //despues veo si me funciona xd

        public static function insert(){
            $clsCon= new Conecction();
            $con = $clsCon->getInstance()->getConnection();
            $query="INSERT INTO products";
            $preparedStatement= $con->prepare($query);
            $preparedStatement->execute();
            $result= $preparedStatement->fetchAll();
            print_r(json_encode($result));

        
        }
        public static function insertDetalle(){
            $clsCon= new Conecction();
            $con = $clsCon->getInstance()->getConnection();
            $query="INSERT INTO products";
            $preparedStatement= $con->prepare($query);
            $preparedStatement->execute();
            $result= $preparedStatement->fetchAll();
            print_r(json_encode($result));
        }

    }