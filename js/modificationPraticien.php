<?php
include("../../api/fonctions.php");

$reponse = modifierPraticien($_POST["id_praticien"], $_POST["nom"], $_POST["prenom"], $_POST["telFixe"], $_POST["telPortable"], $_POST["mail"], $_POST["typePraticien"], $_POST["specialite"], $_POST["libelleLieu"], $_POST["adresselieu"], $_POST["cpLieu"], $_POST["villeLieu"], $_POST["paysLieu"], $_POST["region"], $_POST["dateDerniereVisite"]);

header("Location: ../praticienDetails.php?id=".$_POST["id_praticien"]."&reponse=".$reponse);
exit();