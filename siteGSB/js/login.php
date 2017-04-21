<?php
    session_start();
    include("../../api/fonctions.php");
    $user = connexion($_POST["login"], $_POST["mdp"]);
    echo strlen($user);
	if(strlen($user) == 41)
	{
		header('Location: ../index.php?erreur=1');
		exit();
	}
	else
	{
		$_SESSION["user_id_json"] = $user;
		header('Location: ../home.php');
		exit();
	}
?>