<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Parc automobile </title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="right-sidebar">
	<div id="page-wrapper">
        
        <input type="hidden" name="id_parcauto" id="id_parcauto" value="<?php echo $_GET["id"] ?>" />
        <input type="hidden" name="idRegion" id="idRegion" value="<?php echo $_GET["region"] ?>" />
        
		<!-- Main -->
		<div class="wrapper style1">

			<div class="container">
                
                <?php
                    if(strtoupper($user->fonction_utilisateur->libelle) == "ADMINISTRATEUR")
                    {
                        ?>
                            <a href="ajouterVehicule.php?id=<?php echo $_GET["id"] ?>"><button class="boutons">Ajouter Vehicule</button></a>
                            <button class="boutons" id="supprimer" >Supprimer ce parc automobile</button>
                            <a href="modifierParcAuto.php?id=<?php echo $_GET["id"] ?>"><button class="boutons">Modifier ce parc automobile</button></a>
                        <?php
                    }
                ?>
                
				<table border="1" class="default">
					<thead>
						<tr>
							<th style="font-weight:bold; width:10%;">Immatricule</th>
							<th style="font-weight:bold; width:40%;">Modèle</th>
							<th style="font-weight:bold; width:30%;">Fabricant</th>
						</tr>
					</thead>
					<tbody id="tableau">
						
					</tbody>
				</table>
			
			</div>

		</div>

		<!-- Footer -->
		<div id="footer">
			<div class="container">
				<div class="row">

					
				</div>
			</div>

		</div>

		<!-- Scripts -->
        <script src="js/ajax.js"></script>
        <script src="js/parcautoVoiture.js"></script>
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.dropotron.min.js"></script>
		<script src="assets/js/jquery.scrolly.min.js"></script>
		<script src="assets/js/jquery.onvisible.min.js"></script>
		<script src="assets/js/skel.min.js"></script>
		<script src="assets/js/util.js"></script>
		<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		<script src="assets/js/main.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>