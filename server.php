<?php

    $todo_list = file_get_contents("todo.json");


    $list = json_decode($todo_list, true);

    if(isset($_POST['todoindex'])){

        $index = $_POST['todoindex'];
        //recupero elemento con indice index e assegno valore true a 'done'
        $list[$index]['done']= true;
        file_put_contents("todo.json", json_encode($list));
    }

    
    header('Content-type: application/json');
    echo json_encode($list);
?>