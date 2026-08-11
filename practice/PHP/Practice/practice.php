<?php

    //Array
    $cars = array("Honda", "BMW", "Lexus");

    array_push($cars, "Lambo");
    array_pop($cars);


    foreach($cars as $car){
        echo $car . "<br>";
    }

    // associative array
    $data = array("USA" => "Washington", "Bangladesh" => "Dhaka", "Korea" => "Seoul");

    foreach($data as $country => $capital){
        echo "{$country} => {$capital} <br>";
    }


    

?>