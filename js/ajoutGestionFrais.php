<?php
	include("../../api/fonctions.php");
	try{
        var_dump($_POST);
		//je crée le nouveau frais dans la base de données
		$reponse = json_decode(addFrais($_POST["montant"], $_POST["commentaire"], $_POST["date"], $_POST["id_utilisateur"], $_POST["typeFrais"]));
        echo $reponse;
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
                $destination = substr($destination, 3);
				if ($resultat) 
				{
					if(json_decode(addPj($destination, $_FILES["fichier"]['name'], $idFrais)))
					{
						header('Location: ../mesFichesFrais.php?id='.$_POST["id_utilisateur"]);
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