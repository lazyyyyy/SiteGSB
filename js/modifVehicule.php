<?php
	include("../../api/fonctions.php");
	try{
        var_dump($_POST);
        if(isset($_FILES['fichier']))
        {
            if($_FILES['fichier']['name'] != "")
			{
				if ($_FILES['fichier']['error'] > 0)
				{
					echo "Erreur lors du transfert";
				}
                else{
                    $nomDuFichier = $_FILES['fichier']['name'];

                    $extension_upload = strtolower(  substr(  strrchr($_FILES['fichier']['name'], '.')  ,1)  );
                    $destination = "../imagesVehicules/".md5(uniqid(rand(), true)).".".$extension_upload;
                    $resultat = move_uploaded_file($_FILES['fichier']['tmp_name'],$destination);
                    $destination = substr($destination, 3);
                    if ($resultat) 
                    {
                        modifierImageVehicule($destination, $_POST["immat"]);
                        /*echo $destination;
                        $reponse = json_decode(addVehicule($_POST["immatricule"], $_POST["marque"], $_POST["model"], $_POST["description"], $_POST["km"], $_POST["equipement"], $_POST["parcAutoId"], $_POST["energie"], $_POST["type_vehicule"], $destination));
                        echo "reponse = ".$reponse;
                        if($reponse)
                        {
                            header('Location: ../parcautoVoiture.php?id='.$_POST["parcAutoId"]);
                              exit();
                        }*/
                    }
                }
			}
            
        }
        echo "OK";
        modifierVehicule($_POST["immat"], $_POST["immatricule"], $_POST["marque"], $_POST["model"], $_POST["description"], $_POST["km"], $_POST["equipement"], $_POST["parcAutoId"], $_POST["energie"], $_POST["type_vehicule"]);
        header('Location: ../parcautoDetailVoiture.php?id='.$_POST["immatricule"].'&parcAutoId='.$_POST["parcAutoId"]);
        exit();
	}catch(Exception $e){
		header('Location: ../gestiondesfrais.php?erreur=1');
		exit();
	}
?>