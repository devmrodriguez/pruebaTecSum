<?php
    $para      = 'mariorocko99@gmail.com';
    $titulo    = 'Nuevo formulario enviado';
    $mensaje   = $_POST['mensaje']; // obtener el mensaje del formulario
    $cabeceras = 'From: website@tecsum.com' . "\r\n" .
                 'Reply-To: website@tecsum.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($para, $titulo, $mensaje, $cabeceras);
?>
