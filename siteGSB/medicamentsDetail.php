<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>ADIMOL </title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="right-sidebar">
	<div id="page-wrapper">
        
        <!-- Pour récupérer la variable PHP transmise en GET, depuis le code JavaScript -->
        <input type="hidden" id="id_produit" value="<?php echo $_GET["id"] ?>" />


		<!-- Main -->
		<div class="wrapper style1">

			<div class="container">

				<div class="row" id="nom">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Nom </label>
					</div>
					
				</div>
                <div class="row" id="labo">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Laboratoire </label>
					</div>
					
				</div>
				<div class="row" id="famille">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Famille </label>
					</div>
					
				</div>
				<div class="row" id="composition">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Composition </label>
					</div>
					
				</div>
				<div class="row" id="effets">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Effets </label>
					</div>
					
				</div>
				<div class="row" id="contreIndication">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Contre-indications </label>
					</div>
					
				</div>
                <div class="row" id="dosage">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Dosage </label>
					</div>
					
				</div>
                <div class="row" id="typeIndividu">
					<div class="col-lg-2 col-xs-2 text-right">
						<label style="font-weight:bold;">Type d'individu concerné </label>
					</div>
					
				</div>
			
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
        <script src="js/ajax.js" ></script>
        <script src="js/medicamentsDetail.js" ></script>
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