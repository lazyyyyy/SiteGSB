<?php
    session_start();
    include("../../api/fonctions.php");
    $user = json_decode(connexion($_POST["login"], $_POST["mdp"]));
	if($user->id == null)
	{
		header('Location: ../index.php?erreur=1');
		exit();
	}
	else
	{
		$_SESSION["user_id_json"] = $user->id;
		header('Location: ../home.php');
		exit();
	}
?>