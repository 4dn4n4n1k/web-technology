<?php
    session_start();

    $fName = $_REQUEST["fName"];
    $lName = $_REQUEST["lName"];
    $dob = $_REQUEST["dob"];
    $email = $_REQUEST["email"];
    $phone = $_REQUEST["phone"];
    $gender = $_REQUEST["gender"];
    $password = $_REQUEST["password"];
    $confirmPass = $_REQUEST["cPassword"];

    $_SESSION["username"] = $email;
    $_SESSION["password"] = $password;

    echo "First Name: " . $fName . "<br>";
    echo "Last Name: " . $lName . "<br>";
    echo "Date of Birth: " . $dob . "<br>";
    echo "Gender: " . $gender . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Phone: " . $phone . "<br>";
    echo "Password" . $password . "<br>";
    if(isset($_REQUEST["cbox"])){
        echo "Terms Accepted";
    }
    else{
        echo "Terms Rejected";
    }

?>