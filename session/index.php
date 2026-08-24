<?php
    session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Session Practice</title>
    </head>

    <body>
        <form action="index.php" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">
            <br><br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password">
            <br><br>
            <input type="submit" name="login">
        </form>
    </body>
</html>

<?php
    $username = $_SESSION["username"];
    $password = $_SESSION["password"];

    if(isset($_POST["login"])){

        if(!empty($_POST["username"]) && !empty($_POST["password"])){

            $_SESSION["username"] = $_POST["username"];
            $_SESSION["password"] = $_POST["password"];

            header("Location: home.php");
        }
        else{
            echo "Username / Password is missing";
        } 
        
    }
?>