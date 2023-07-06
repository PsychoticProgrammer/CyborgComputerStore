<?php

    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/caseDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            CASE_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>