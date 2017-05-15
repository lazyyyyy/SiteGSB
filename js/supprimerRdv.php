<?php
    require_once("../../api/fonctions.php");
    removeRdvById($_GET["id"]);
    header('Location: ../agenda.php?annee=2017');
    exit();
?>