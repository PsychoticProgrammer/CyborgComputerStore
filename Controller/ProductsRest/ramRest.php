<?php

    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/ramDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            RAM_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>