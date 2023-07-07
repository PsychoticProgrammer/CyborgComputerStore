<?php

    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/compuDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            COMPU_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }
?>