<!DOCTYPE html>

<html>
    <head>
        <title>Login Verify</title>
    </head>

    <body>

        <form action="index.php" method="post">
            <h1>Login</h1>

            <label for="username" name="username">Username:</label><br>
            <input type="text" name="username" id="">

            <br>

            <label for="passowrd" name="password">Password</label><br>
            <input type="text" name="password">

            <br><br>

            <input type="submit" value = "Login" name="login">
        </form>
        
    </body>
</html>

<?php

    if(isset($_POST["login"])){
        $username = $_POST["username"];
        $password = $_POST["password"];

        if(empty($username)){
            echo "Username is empty";
        }
        elseif(empty($password)){
            echo "Password is empty";
        }
        else{
            echo "Hello {$username}";
        }
    }
?>