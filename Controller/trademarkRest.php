<?php
    include_once('../Model/mysqlConnection.php');
    include_once('../Model/trademarkDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            TRADEMARK_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>