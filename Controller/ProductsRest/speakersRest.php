<?php

    include_once('../../Model/mysqlConnection.php');
    include_once('../../Model/productsDataAccess/speakersDAO.php');

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            SPEAKERS_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>