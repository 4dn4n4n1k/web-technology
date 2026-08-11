<?php

    $server = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "mydb";
    $conn = "";

    try{
        $conn = mysqli_connect($server, $user, $pass, $db_name);
    }

    catch(mysqli_sql_exception){
        echo "Couldn't connect";
    }

    if($conn){
        echo "You are connected";
    }

?>