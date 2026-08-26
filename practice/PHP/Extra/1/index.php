
<!DOCTYPE html>

<html>
    <head>
        <title></title>
    </head>
    <body>
        <h1>Welcome</h1>

        <form action="index.php" method="post">
            <label for="input">Enter your favourite language:</label>
            <input type="text" name="input" id="input">
        <br><br>
        <input type="submit" name="add" id="add">
        </form>
        <br><br>
        <h2>Favourite laguages are: </h2>

    </body>
</html>

<?php

    session_start();
    
    if(!isset($_SESSION['input'])){
        $_SESSION['input'] = [];

    }

    if(isset($_POST['add'])){
        $language = $_POST['input'];

        if($language != ""){
            $_SESSION['input'][] = $language;
        }
    }

    foreach($_SESSION['input'] as $lan){
        echo $lan , "<br>";
    }
?>