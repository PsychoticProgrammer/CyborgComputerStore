<?php
    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/keyboardDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            KEYBOARD_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }
?>