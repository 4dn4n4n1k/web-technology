<!DOCTYPE html>

<html>
    <head>
    <title>Language popularity Checker</title>
    </head>

    <body>
        <h1>Welcome</h1>

        <form action="index.php" method="post">
            <label for="">Name a language: </label><br>
            <input type="text" name = "lan">
            <input type="submit">
        </form>
    </body>
</html>

<?php

    $language = array("Python" => "90%", "Java" => "80%", "Bash" => "98%");
    $show = $language[$_POST["lan"]];

    if(empty($show)){
        echo "First enter a variable";
    }
    else{
        echo "The language popularity is: {$show}";
    }
    

?>