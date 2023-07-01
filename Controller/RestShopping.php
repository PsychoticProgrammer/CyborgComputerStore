<?php
require("salesProductsDao.php");


$type = $_SERVER["REQUEST_METHOD"];

switch ($type) {
    case 'GET':
        SalesProductDao::select();
        break;
    case 'POST':
        SalesProductDao::select();
        break;
}
