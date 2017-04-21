<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Recherche de praticiens </title>
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

				<ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#simple" data-toggle="tab">Simple</a>
                    </li>
                    <li class="">
                        <a href="#avance" data-toggle="tab">Avancé</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade in active" id="simple">
                        <br>
                        <form action="" method="post">
							<div class="row">
								<div class="col-lg-2 col-xs-2 text-right">
									<label>Nom praticien</label>
								</div>
								<div class="col-lg-10 col-xs-10">
									<select name="praticien" class="form-control" style="display:inline;">
				 						<option value="1">Praticien 1</option>
				 						<option value="2">Praticien 2</option>
				 						<option value="3">Praticien 3</option>
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
                    <div class="tab-pane fade in" id="avance">
                        <br>
                        <form action="" method="post">
							<div class="row">
								<div class="col-lg-2 col-xs-2 text-right">
									<label>Nom </label>
								</div>
								<div class="col-lg-10 col-xs-10">
									<input type="text" class="form-control" name="nom" />
								</div>
							</div>
							<div class="row">
								<div class="col-lg-2 col-xs-2 text-right">
									<label>Ville </label>
								</div>
								<div class="col-lg-10 col-xs-10">
									<input type="text" class="form-control" name="ville" />
								</div>
							</div>
							<div class="row">
								<div class="col-lg-2 col-xs-2 text-right">
									<label>Type </label>
								</div>
								<div class="col-lg-10 col-xs-10">
									<select name="type" class="form-control" style="display:inline;">
				 						<option value="">-- Sélectionner --</option>
				 						<option value="1">Type 1</option>
				 						<option value="2">Type 2</option>
				 						<option value="3">Type 3</option>
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