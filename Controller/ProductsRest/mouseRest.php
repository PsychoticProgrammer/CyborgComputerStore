<?php
    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/mouseDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            MOUSE_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>