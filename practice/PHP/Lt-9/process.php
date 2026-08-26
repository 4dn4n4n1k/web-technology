<?php
    echo "<br>currently running script is: ",$_SERVER["PHP_SELF"];
    echo "<br>Server name is: ",$_SERVER["SERVER_NAME"];
    echo "<br>HTTP host is: ",$_SERVER['HTTP_HOST'];
    echo "<br> Refferer: ", $_SERVER['HTTP_REFERER'];
    echo "<br> HTTP client: ", $_SERVER['HTTP_USER_AGENT'];

    echo "<br> Script Name: ",$_SERVER['SCRIPT_NAME'];
    echo "<br> Request method: ", $_SERVER["REQUEST_METHOD"];

?>