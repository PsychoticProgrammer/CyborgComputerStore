<?php
    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/graphicDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            GRAPHIC_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }
?>