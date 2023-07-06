<?php
    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/boardDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            BOARD_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }
?>