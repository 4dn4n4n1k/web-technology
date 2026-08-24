<?php
    session_start();
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Homepage</title>
    </head>
    <body>
        <form action="home.php" method="post">
            <h1>This is the home page</h1>
            <?php
                $username = $_SESSION["username"];
                echo "Hi," . $username . "<br>";
            ?>
            <input type="submit" name="logout" id="logout" value="Logout">
        </form>
    </body>
</html>

<?php

    if(isset($_POST["logout"])){
        session_destroy();
        header("Location: index.php");
    }
?>