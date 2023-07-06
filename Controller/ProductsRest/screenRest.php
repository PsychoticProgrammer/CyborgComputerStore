<?php
    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/screenDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            SCREEN_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }
?>