<?php
    if(empty($_REQUEST["fName"]) ||
        empty($_REQUEST["lName"]) ||
        empty($_REQUEST["dob"]) ||
        empty($_REQUEST["email"]) ||
        empty($_REQUEST["phone"]) ||
        empty($_REQUEST["password"]) ||
        empty($_REQUEST["cPassword"]) ||
        empty($_REQUEST["gender"])){

            header("Location: registration.php");
            exit();
        }

    if(!preg_match("/^[A-Za-z ]+$/", $_REQUEST["fName"])){
        echo "Invalid First Name";
        exit();
    }

    if(!preg_match("/^[A-Za-z ]+$/", $_REQUEST["lName"])){
        echo "Invalid last name";
        exit();
    }

    if(!preg_match("/^[0-9]{11}$/" , $_REQUEST["phone"])){
        echo "Invalid phone number";
        exit();
    }

    if(!filter_var($_REQUEST["email"], FILTER_VALIDATE_EMAIL)){
        echo "Invalid email";
        exit();
    }

    if($_REQUEST["password"] != $_REQUEST["cPassword"]){
        echo "Password doesn't match";
        exit();
    }

    header("Location: showdata.php");
    exit();
?>