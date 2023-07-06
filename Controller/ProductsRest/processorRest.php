<?php

    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/processorDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            PROCESSOR_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>