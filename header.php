<?php
    session_start();
	if(!isset($_SESSION["user_id_json"]) || $_SESSION["user_id_json"] == null)
	{
		header('Location: index.php');
		exit();
	}
?>

<!DOCTYPE HTML>
<html>
	<body>
        
        <!--Pour récupérer la variable de session en Javascript-->
        <input type="hidden" name="user_json" value="<?php echo $_SESSION["user_id_json"] ?>" id="user_json"/>
        <?php
            include("../api/fonctions.php");
            $user = json_decode(getUtilisateurById($_SESSION["user_id_json"]));
            ?>
            <input type="hidden" name="fonction_utilisateur" value="<?php echo strtoupper($user->fonction_utilisateur->libelle) ?>" />
            <?php
            if(strtoupper($user->fonction_utilisateur->libelle) == "ADMINISTRATEUR")
            {
                ?>
                    <div>
                        <label id="admin">ADMINISTRATEUR</label>
                    </div>
                <?php
            }
        ?>
		<div id="header">

			<!-- Inner -->
			<div class="inner">
				<header>
					<h1><a href="home.php" id="logo">Galaxy Swiss Bourdin</a></h1>
					<hr />
					<p>Entreprise spécialisée dans l'industrie pharmaceutique</p>
				</header>
				<footer>
					<a href="monCompte.php" class="button circled scrolly">Compte</a>
				</footer>
			</div>

			<!-- Nav -->
			<nav id="nav">
				<ul>
					<li class="active"><a href="home.php">Home</a></li>

					<li><a href="agenda.php">Agenda</a></li>
					<li><a href="gestiondesfrais.php">Gestion des frais</a>
                        <ul>
                                    <a href="gestiondesfrais.php"><li>Nouvelle fiche</li></a>
                                    <a href="mesFichesFrais.php?id=<?php echo json_decode($_SESSION["user_id_json"]) ?>"><li>Mes fiches de frais</li></a>
                        <?php
                            if(strtoupper($user->fonction_utilisateur->libelle) == "ADMINISTRATEUR")
                            {
                                ?>
                                    <a href="gestiondesfraisListe.php"><li>Liste des fiches</li></a>
                                <?php
                            }
                        ?>
                            </ul>
                    </li>
					<li><a href="compterendu.php">Compte Rendu</a>
                        <ul>
                                    <a href="compterendu.php"><li>Nouvelle fiche</li></a>
                                    <a href="mesComptesRendus.php?id=<?php echo json_decode($_SESSION["user_id_json"]) ?>"><li>Mes comptes rendus</li></a>
                        <?php
                            if(strtoupper($user->fonction_utilisateur->libelle) == "ADMINISTRATEUR")
                            {
                                ?>
                                    <a href="compterenduListe.php"><li>Liste des comptes rendus</li></a>
                                <?php
                            }
                        ?>
                            </ul>
                    </li>
					<li>
                        <a href="parcautoaccueil.php">Parc Auto</a>
                        <ul>
							<li><a href="parcautoaccueil.php">Nouvelle réservation</a></li>
							<li><a href="mesReservationsVehicules.php?id=<?php echo json_decode($_SESSION["user_id_json"]) ?>">Mes réservations</a></li>
						</ul>
                    </li>
					<li>
						<a href="#">Praticiens</a>
						<ul>
							<li><a href="praticiens.php">Recherche de praticien</a></li>
							<li><a href="praticiensListe.php">Liste des praticiens</a></li>
						</ul>

					</li>
					<li>
						<a href="medicamentsListe.php">Médicaments</a>
					</li>
                    
                     <?php
                        if(strtoupper($user->fonction_utilisateur->libelle) == "ADMINISTRATEUR")
                        {
                            ?>
                                <li>
                                    <a href="utilisateursListe.php">Utilisateurs</a>
                                </li>
                            <?php
                        }
                       ?>
				</ul>
                <a href="js/deconnexion.php" ><button id="deconnexion">Deconnexion</button></a>
			</nav>
		</div>
	</body>
</html>
