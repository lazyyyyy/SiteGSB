<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Nouveau Véhicule</title>
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

			<div class="container">
              
				<form id="formulaire" method="post" action="js/ajoutVehicule.php" enctype="multipart/form-data" >
                    <input type="hidden" name="parcAutoId" id="parcAutoId" value="<?php echo $_GET["id"] ?>" />
                    <input type="hidden" name="region" id="region" value="<?php echo $_GET["region"] ?>" />
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Immatricule </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<input type="text" name="immatricule" id="immatricule" required />	
						</div>
                        <div class="erreur" id="erreurImmatricule"></div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Marque </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<select id="marque" name="marque" required></select>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Model </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<select id="model" name="model" required></select>
						</div>
					</div>
                    <div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Description </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<textarea class="form-control" name="description" id="description" rows="3"></textarea>
						</div>
					</div>
                    <div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Kilométrage </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<input type="number" name="km" id="km" />
						</div>
					</div>
                    <div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Equipement </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<textarea class="form-control" name="equipement" id="equipement" rows="3"></textarea>
						</div>
					</div>
                    <div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Energie </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<select id="energie" name="energie" required></select>
						</div>
					</div>
                    <div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Type vehicule </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<select id="type_vehicule" name="type_vehicule" required></select>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Image (format .png, .jpg ou .jpeg) </label>
						</div>
						<div class="col-lg-10 col-xs-10" id="fichiersElt" >
                                <input type="file" class="form-control image" name="fichier[]" id="fichier" accept="image/*" multiple required />
						</div>
                        <div class="erreur" id="erreurFichier"></div>
					</div>
                    
					<div class="row">
						<div class="col-xs-12 col-lg-12 text-right">
							<input type="submit" value="Enregistrer" class="btn btn-success" />
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
					<section class="4u 12u(mobile)">
						<header>
							<h2 class="icon fa-twitter circled"><span class="label">Tweets</span></h2>
						</header>
						<ul class="divided">
							<li>
								<article class="tweet">
									Amet nullam fringilla nibh nulla convallis tique ante sociis accumsan.
									<span class="timestamp">5 minutes ago</span>
								</article>
							</li>
							<li>
								<article class="tweet">
									Hendrerit rutrum quisque.
									<span class="timestamp">30 minutes ago</span>
								</article>
							</li>
							<li>
								<article class="tweet">
									Curabitur donec nulla massa laoreet nibh. Lorem praesent montes.
									<span class="timestamp">3 hours ago</span>
								</article>
							</li>
							<li>
								<article class="tweet">
									Lacus natoque cras rhoncus curae dignissim ultricies. Convallis orci aliquet.
									<span class="timestamp">5 hours ago</span>
								</article>
							</li>
						</ul>
					</section>

					<!-- Posts -->
					<section class="4u 12u(mobile)">
						<header>
							<h2 class="icon fa-file circled"><span class="label">Posts</span></h2>
						</header>
						<ul class="divided">
							<li>
								<article class="post stub">
									<header>
										<h3><a href="#">Nisl fermentum integer</a></h3>
									</header>
									<span class="timestamp">3 hours ago</span>
								</article>
							</li>
							<li>
								<article class="post stub">
									<header>
										<h3><a href="#">Phasellus portitor lorem</a></h3>
									</header>
									<span class="timestamp">6 hours ago</span>
								</article>
							</li>
							<li>
								<article class="post stub">
									<header>
										<h3><a href="#">Magna tempus consequat</a></h3>
									</header>
									<span class="timestamp">Yesterday</span>
								</article>
							</li>
							<li>
								<article class="post stub">
									<header>
										<h3><a href="#">Feugiat lorem ipsum</a></h3>
									</header>
									<span class="timestamp">2 days ago</span>
								</article>
							</li>
						</ul>
					</section>

					<!-- Photos -->
						<!--	<section class="4u 12u(mobile)">
								<header>
									<h2 class="icon fa-camera circled"><span class="label">Photos</span></h2>
								</header>
								<div class="row 25%">
									<div class="6u">
										<a href="#" class="image fit"><img src="images/pic10.jpg" alt="" /></a>
									</div>
									<div class="6u$">
										<a href="#" class="image fit"><img src="images/pic11.jpg" alt="" /></a>
									</div>
									<div class="6u">
										<a href="#" class="image fit"><img src="images/pic12.jpg" alt="" /></a>
									</div>
									<div class="6u$">
										<a href="#" class="image fit"><img src="images/pic13.jpg" alt="" /></a>
									</div>
									<div class="6u">
										<a href="#" class="image fit"><img src="images/pic14.jpg" alt="" /></a>
									</div>
									<div class="6u$">
										<a href="#" class="image fit"><img src="images/pic15.jpg" alt="" /></a>
									</div>
								</div>
							</section>
						-->

					</div>
					<hr />
					<div class="row">
						<div class="12u">

							<!-- Contact -->
							<section class="contact">
								<header>
									<h3>Nisl turpis nascetur interdum?</h3>
								</header>
								<p>Urna nisl non quis interdum mus ornare ridiculus egestas ridiculus lobortis vivamus tempor aliquet.</p>
								<ul class="icons">
									<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="icon fa-pinterest"><span class="label">Pinterest</span></a></li>
									<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
									<li><a href="#" class="icon fa-linkedin"><span class="label">Linkedin</span></a></li>
								</ul>
							</section>

							<!-- Copyright -->
							<div class="copyright">
								<ul class="menu">
									<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
								</ul>
							</div>

						</div>

					</div>
				</div>
			</div>

		</div>

		<!-- Scripts -->
        <script src="js/ajax.js"></script>
        <script src="js/ajouterVehicule.js"></script>
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