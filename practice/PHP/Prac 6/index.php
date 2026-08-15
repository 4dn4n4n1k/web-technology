<!DOCTYPE html>

<html>
    <head>

    </head>

    <body>
        <form action="index.php" method="post">
            <label for="password">Password:</label>
            <input type="password" name="password">
            <input type="submit">
        </form>
    </body>
</html>


<?php
    $password = $_POST["password"];

    $hash = password_hash($password, PASSWORD_DEFAULT);
    echo "Your password is: {$password} <br>";
    echo "Your hashed password is: {$hash} <br>";

    if(password_verify("password123", $hash)){
        echo "You are logged in.";
    }
    else{
        echo "Incorrect password";
    }
?>