<?php

    $todo_list = file_get_contents("todo.json");


    $list = json_decode($todo_list, true);


    
    echo $todo_list;
?>