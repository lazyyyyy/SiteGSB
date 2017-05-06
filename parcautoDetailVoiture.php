<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Details Vehicule </title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="right-sidebar">
    <input type="hidden" name="immatricule" id="immatricule" value="<?php echo $_GET["id"] ?>" />
    <input type="hidden" name="idUser" id="idUser" value="<?php echo json_decode($_SESSION["user_id_json"]) ?>" />
    <input type="hidden" name="parcAutoId" id="parcAutoId" value="<?php echo $_GET["parcAutoId"] ?>" />
	<div id="page-wrapper">

		<!-- Main -->
		<div class="wrapper style1">

			<div class="container" id="contenu">

				<div class="row" id="immatriculeElt">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Immatricule </label>
                    </div>
                    <div id="immatricul"></div>
				</div>
                <div class="row">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Marque </label>
                    </div>
                    <div id="marque"></div>
				</div>
                <div class="row">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">>Modèle </label>
                    </div>
                    <div id="modele"></div>
				</div>
                <div class="row">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Description </label>
                    </div>
                    <div id="description"></div>
				</div>
                <div class="row" >
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Kilometrage </label>
                    </div>
                    <div id="kilometrage"></div>
				</div>
                <div class="row">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Equipement </label>
                    </div>
                    <div id="equipement"></div>
				</div>
                <div class="row">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Energie </label>
                    </div>
                    <div id="energie"></div>
				</div>
                <div class="row" id="immatriculeElt">
					<div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Type de vehicule</label>
                    </div>
                    <div id="typeVehicule"></div>
				</div>

				<button class="boutons" id="reserver">Réserver</button>
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
        <script src="js/parcautoDetailVoiture.js"></script>
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