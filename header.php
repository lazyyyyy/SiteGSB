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
					<a href="home.php" class="button circled scrolly">Accueil</a>
				</footer>
			</div>

			<!-- Nav -->
			<nav id="nav">
				<ul>
					<li class="active"><a href="home.php">Home</a></li>

					<li><a href="agenda.php">Agenda</a></li>
					<li><a href="gestiondesfrais.php">Gestion des frais</a>
                        <?php
                            if(strtoupper($user->fonction_utilisateur->libelle) == "ADMINISTRATEUR")
                            {
                                ?>
                                <ul>
                                    <a href="gestiondesfrais.php"><li>Nouvelle fiche</li></a>
                                    <a href="gestiondesfraisListe.php"><li>Liste des fiches</li></a>
                                </ul>
                        <?php
                            }
                        ?>
                    </li>
					<li><a href="compterendu.php">Compte Rendu</a></li>
					<li><a href="parcauto.php">Parc Auto</a></li>
					<li>
						<a href="#">Praticiens</a>
						<ul>
							<li><a href="praticiens.php">Recherche de praticien</a></li>
							<li><a href="praticiensListe.php">Liste des praticiens</a></li>
						</ul>

					</li>
					<li>
						<a href="#">Médicaments</a>
						<ul>
							<li><a href="medicaments.php">Rechercher un médicament</a></li>
							<li><a href="medicamentsListe.php">Liste des médicaments</a></li>
						</ul>	
					</li>
				</ul>
                <a href="js/deconnexion.php" ><button id="deconnexion">Deconnexion</button></a>
			</nav>
		</div>
	</body>
</html>
