<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Recherche d'un médicament </title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="right-sidebar">
	<div id="page-wrapper">


		<!-- Main -->
		<div class="wrapper style1">

			<div class="container">

				<form>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Nom commercial</label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<select name="praticien" class="form-control" style="display:inline;" id="nomCommercial">
		 						
		 					</select>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2">
							&nbsp;
						</div>
						<div class="col-xs-10 col-lg-10 text-left">
							<button type="submit" name="lien1" class="btn btn-primary"> <i class="fa fa-search"></i> Rechercher</button>
						</div>
					</div>
				</form>
			
			</div>

		</div>

		<!-- Footer -->
		<div id="footer">
			<div class="container">
				<div class="row">

					<!-- Tweets -->
					

				</div>
			</div>

		</div>

		<!-- Scripts -->
        <script src="js/ajax.js"></script>
        <script src="js/medicaments.js"></script>
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