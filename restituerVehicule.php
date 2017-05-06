<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Restitution vehicule</title>
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


		<!-- Main -->
		<div class="wrapper style1">

			<form id="formulaire">
                <input type="hidden" name="idReservation" id="idReservation" value="<?php echo $_GET["id"] ?>" />
                <div class="row" >
                    <div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Distance parcourue (en km) </label>
                    </div>
                        <div class="col-lg-10 col-xs-10">
                            <input type="number" class="form-control" name="distance" id="distance" required />
                        </div>

                </div>
                <div class="row" >
                    <div class="col-lg-2 col-xs-2 text-right">
                        <label style="font-weight:bold;">Parc automobile d'arrivée </label>
                    </div>
                        <div class="col-lg-10 col-xs-10">
                            <!--<div>
                                <label>Region</label>
                                <select name="region" id="region">
                                </select>
                            </div>-->
                            <!--<div>
                                <label>Parc Automobile</label>-->
                                <select name="parcAuto" id="parcAuto">
                                </select>
                            <!--</div>-->
                        </div>

                </div>
                <input type="submit" value="Valider" />
            </form>

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
        <script src="js/restituerVehicule.js"></script>
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