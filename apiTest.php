<?php
	function addRdv($description)
	{
		try{
			$bdd = new PDO('mysql:host=127.0.0.1;dbname=test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
		}
		catch (Exception $e){
			die('Erreur : '.$e->getMessage());
		}
		
		try
		{
			$req = $bdd->prepare("INSERT INTO test(description) VALUES(?)");
			$data = $req->execute(array($description));
		}
		catch(Exception $e)
		{
			$data = false;
		}
		
		return json_encode($data); //retourne "true" ou "false"
	}
	
	echo addRdv($_POST["description"]);
?>