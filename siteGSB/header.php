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
		<div id="header">

			<!-- Inner -->
			<div class="inner">
				<header>
					<h1><a href="home.php" id="logo">Galaxy Swiss Bourdin</a></h1>
					<hr />
					<p>Entreprise spécialisée dans l'industrie pharmaceutique</p>
				</header>
				<footer>
					<a href="#banner" class="button circled scrolly">Accueil</a>
				</footer>
			</div>

			<!-- Nav -->
			<nav id="nav">
				<ul>
					<li class="active"><a href="home.php">Home</a></li>

					<li ><a href="agenda.php">Agenda</a></li>
					<li ><a href="gestiondesfrais.php">Gestion des frais</a></li>
					<li ><a href="compterendu.php">Compte Rendu</a></li>
					<li ><a href="parcauto.php">Parc Auto</a></li>
					<li >
						<a href="praticiens.php">Praticiens</a>
						<ul>
							<li><a href="praticiens.php">Recherche de praticien</a></li>
						</ul>

					</li>
					<li >
						<a href="medicaments.php">Médicaments</a>
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
