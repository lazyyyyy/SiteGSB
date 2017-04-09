<?php
    session_start();
    include("../../api/fonctions.php");
    $user = connexion($_POST["login"], $_POST["mdp"]);
    $_SESSION["user_id_json"] = $user;
    header('Location: ../home.php');
    exit();
?>