<?php
	include("../../api/fonctions.php");
	try{
        var_dump($_POST);
        
        $reponse = json_decode(addVehicule($_POST["immatricule"], $_POST["marque"], $_POST["model"], $_POST["description"], $_POST["km"], $_POST["equipement"], $_POST["parcAutoId"], $_POST["energie"], $_POST["type_vehicule"]));
        if($reponse)
        {
            if(isset($_FILES['fichier']))
            {

                for($i = 0; $i < sizeof($_FILES['fichier']['name']); $i++)
                {
                    if($_FILES['fichier']['name'][$i] != "")
                    {
                        if ($_FILES['fichier']['error'][$i] > 0)
                        {
                            echo "Erreur lors du transfert";
                        }
                        else{
                            $nomDuFichier = $_FILES['fichier']['name'][$i];

                            $extension_upload = strtolower(  substr(  strrchr($nomDuFichier, '.')  ,1)  );
                            $destination = "../imagesVehicules/".md5(uniqid(rand(), true)).".".$extension_upload;
                            $resultat = move_uploaded_file($_FILES['fichier']['tmp_name'][$i],$destination);
                            $destination = substr($destination, 3);
                            if ($resultat) 
                            {
                                addImageVehicule($destination, $_POST["immatricule"]);

                            }
                        }
                    }
                }
            }
            else{
                echo "Compris";
            }
        }
        header('Location: ../parcautoVoiture.php?id='.$_POST["parcAutoId"].'&region='.$_POST["region"]);
        exit();
	}catch(Exception $e){
		header('Location: ../gestiondesfrais.php?erreur=1');
		exit();
	}
?>