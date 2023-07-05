<?php

    include("../Model/Products/ramDAO.php");

    switch ($_SERVER["REQUEST_METHOD"]) {
        case 'GET':
            RAM_DAO::select();
            break;
        case 'POST':
            //SalesProductDao::select();
            break;
    }

?>
