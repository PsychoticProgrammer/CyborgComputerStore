<?php
    Class Conecction{
        private static  $instanceConnection;
        private $host = "localhost";
        private $dbname = "patronesproyecto";
        private $username = "root";
        private $password = "";


        public function __construct(){
            
        }

        public function getInstance(){
            $clsInstance= static::class;
            if(!isset(self::$instanceConnection)){
                return self::$instanceConnection = new Conecction();
            }else{
                return self::$instanceConnection;
            }

        }

        public function getConnection(){

            try{
                // return $conn = new PDO('mysql:host='.servidor.';dbname='.dbname, user, password, $opciones);
                return $connection= new PDO('mysql:host='.$this->host.';dbname='.$this->dbname, $this->username, $this->password);
            }catch(PDOException $e){
                return die("Could not to connect to the database ".$this->dbname." : ".$e->getMessage());
            }

        }


    }

?>