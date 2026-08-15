<?php

    $car = array("Model" => "Mustang", "Color" => "Black", "Year" => "1998");

    foreach($car as $details => $des){
        echo $details . " = " , $des . "<br>";
    }


    $num = array(10, 7 , 11, 18, 2, 4);
    echo rsort($num) . "<br>";

    $oneD = array("Texas", "Vegas", "Ibiza", "London");

    echo "Printing 1D: <br>";
    foreach($oneD as $one){
        echo $one . "<br>";
    }

    echo "Printing with index: <br>";
    foreach($oneD as $index => $arr){
        echo $index, "=>" ,$arr, "<br>";
    }

    $twoD = array([1,5,7], [3,6,9,12], [4,8,12,16,20]);

    echo "Printing 2D array:";
    foreach($twoD as $two){
        echo "<br>";

        foreach($two as $twoArr){
            echo $twoArr, " ";
        }
    }


    function sayMyName(){
        $name = "adnananik";
        echo "<br> Hello, ", $name;
    }

    sayMyName();

    echo "<br> Currently running script: ", $_SERVER["PHP_SELF"];
    echo "<br> Server Name: ", $_SERVER["SERVER_NAME"];
    echo "<br> HTTP host is: ", $_SERVER["HTTP_HOST"];
    echo "<br> HTTP Refferer: ", $_SERVER["HTTP_REFERER"];
    echo "<br> HTTP Client: ", $_SERVER["HTTP_USER_AGENT"];
    echo "<br> Script Name: ", $_SERVER["SCRIPT_NAME"];
    echo "<br> HTTP Method: ", $_SERVER["REQUEST_METHOD"];
    
?>

