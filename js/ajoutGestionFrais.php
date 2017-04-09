<?php
	include("../../api/fonctions.php");
	try{
		//je crée le nouveau frais dans la base de données
		
		var_dump($_FILES);
		
		$reponse = json_decode(addFrais($_POST["montant"], $_POST["commentaire"], $_POST["date"], $_POST["id_utilisateur"], $_POST["typeFrais"]));
		if($reponse)
		{
			//je récupère l'id du frais créé
			$idFrais = json_decode(getIdFrais($_POST["montant"], $_POST["commentaire"], $_POST["date"], $_POST["id_utilisateur"], $_POST["typeFrais"]));
			
			//s'il y a une pièce jointe, je la crée dans la BDD
			if($_FILES['fichier']['name'] != "")
			{
				if (!$_FILES['fichier']['error'] > 0)
				{
					echo "Erreur lors du transfert";
				}

				$nomDuFichier = $_FILES['fichier']['name'];

				$extension_upload = strtolower(  substr(  strrchr($_FILES['fichier']['name'], '.')  ,1)  );
				$destination = "../pj/".md5(uniqid(rand(), true)).".".$extension_upload;
				$resultat = move_uploaded_file($_FILES['fichier']['tmp_name'],$destination);
				if ($resultat) 
				{
					if(json_decode(addPj($destination, $_FILES["fichier"]['name'], $idFrais)))
					{
						header('Location: ../gestiondesfrais.php?erreur=0');
						exit();
					}
				}
			}
		}
	}catch(Exception $e){
		header('Location: ../gestiondesfrais.php?erreur=1');
		exit();
	}
?>