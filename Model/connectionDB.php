<?php
    Class Connection{

        private static  $connection;
        private static $host = "localhost";
        private static $dbname = "patronesproyecto";
        private static $username = "root";
        private static $password = "";


        private function __construct(){
            
        }

        public static function getConnection(){
            if(self::$connection == null){
                try{
                    return self::$connection= new PDO('mysql:host=' . self::$host.';dbname=' . self::$dbname, 
                        self::$username, self::$password);
                }catch(PDOException $e){
                    return die("Could not to connect to the database " . self::$dbname . ": " . $e->getMessage());
                }
            }
            return self::$connection;
        }
    }

?>