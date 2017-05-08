<?php
    include("../../api/fonctions.php");

    try{
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
                    $destination = "../pj/".md5(uniqid(rand(), true)).".".$extension_upload;
                    $resultat = move_uploaded_file($_FILES['fichier']['tmp_name'],$destination);
                    $destination = substr($destination, 3);
                    if ($resultat) 
                    {
                        modifierPjFrais($destination, $nomDuFichier, $_POST["idFrais"]);
                    }
                }
			}
            
        }
        $reponse = json_decode(modifierFrais($_POST["montant"], $_POST["commentaire"], $_POST["date"], $_POST["typeFrais"], $_POST["idFrais"]));
        header("Location: ../detailsFrais.php?id=".$_POST["idFrais"]);
        //header("detailsFrais.php?id=".$_POST["idFrais"]);
        exit();
        
    }catch(Exception $e){
        header("Location: ../modifierFrais.php?id=".$_POST["idFrais"]."&erreur=1");
        exit();
    }
        
?>