<?php

    echo "------------ PART A ------------ <br>";

    $name = "Adnan Anik";
    $student_id = "23-00000-111";
    $department = "CSE";

    echo "Name: ", $name . "<br>";
    echo "Student ID: ", $student_id . "<br>";
    echo "Department: ", $department . "<br>";


    echo "------------ PART B (1) ------------ <br>";

    $num1 = 10;
    $num2 = 5;

    $addition = $num1 + $num2;
    $subtraction = $num1 - $num2;
    $multiplication = $num1 * $num2;
    $division = $num1 / $num2;

    echo "Addition: ", $addition. "<br>";
    echo "Subtraction: ", $subtraction. "<br>";
    echo "Multiplication: ", $multiplication. "<br>";
    echo "Division: ", $division. "<br>";


    echo "------------ PART B (2) ------------ <br>";

    $string = "556";
    $int1 = (int)$string;
    echo "Value: ", $int1 ,"<br>", "Datatype: ", gettype($int1), "<br>";

    $float = 18.30;
    $int2 = (int)$float;
    echo "Value: ", $int2, "<br>", "Datatype: ", gettype($int2), "<br>";


    echo "------------ PART C ------------ <br>";

    $marks = 75;

    if($marks >= 80){
        echo "Grade A";
    }
    elseif($marks >= 65){
        echo "Grade B";
    }
    elseif($marks >= 50){
        echo "Grade C";
    }
    else{
        echo "Fail";
    }

    echo "------------ PART D (1)------------ <br>";

    echo "For loop: <br>";
    for($i = 0; $i <= 10; $i++){
        echo $i, "<br>";
    }
    
    echo "While loop: <br>";
    $i = 2;
    while($i<= 20){
        echo $i, "<br>";
        $i += 2; 
    }


    echo "------------ PART E ------------ <br>";

    $indexed_array = ["Javascript", "PHP", "C++", "C#", "Python"];

    echo "My fav programmming languages are: ";
    foreach($indexed_array as $iarray){
        echo $iarray, " , ";
    }

    $associative_array = ["Name: " => "Adnan Anik", "Email: " => "adnananik301@gmail.com", "City: " => "Dhaka"];

    echo "<br> Printing associative array: <br>";
    foreach($associative_array as $key => $value){
        echo $key, "=>", $value, "<br>";
    }


    echo "------------ PART F ------------ <br>";

    function calculateSquare($n1){
        echo $n1 * $n1;
    }

    echo "Squared number: ";
    calculateSquare(6);
    
?>