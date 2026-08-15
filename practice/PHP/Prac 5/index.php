<!DOCTYPE html>

<html>
    <head>

    </head>

    <body>
        <h1>Welcome to Practice</h1>

        <form action="index.php" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username">
            <br><br>
            <label for="password">Password:</label>
            <input type="password" name="password">
            <br><br>
            <input type="checkbox" name="checkbox" id="">
            <label for="checkbox">I agree to the terms & conditions</label>
            <br><br>
            <input type="submit">
        </form>
    </body>
</html>

<?php

    $username = $_POST["username"];
    $password = $_POST["password"];
    $checkbox = $_POST["checkbox"];


    echo "Hello, ",  $username. "<br>";
    echo "Your password is: ", $password;

    if(strlen($password) < 3 ){
        echo "<br> Change password immediately";
    }

    if(empty($username)){
        echo "Fill the username";
    }

    if(isset($checkbox)){
        echo "<br> You marked the checkbox";
    }
    else{
        echo "<br> You haven't marked it";
    }

?>