<!DOCTYPE HTML>
-<html>
<head>
	<title>Index</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/main.css" />
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
</head>
<body class="homepage">
	<div id="page-wrapper">

		<!-- Header -->
		<div id="header">

			<!-- Inner -->
			<div class="inner">
				<header>
                    <?php
                        if(isset($_GET["erreur"]))
                        {
                            ?>
                            <div>
                                <label>Nom d'utilisateur ou mot de passe incorrect</label>
                            </div>
                            <?php
                        }
                    ?>
					<form action="js/login.php" method="post" id="connexion">
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Utilisateur</label>
						</div>
						<div class="col-lg-20 col-xs-20">
							<input type="text" class="form-control" name="login" rows="1"/>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Mot de passe</label>
						</div>
						<div class="col-lg-10 col-xs-10"> 
							<input type="password" class="form-control"name="mdp" rows="1"/>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-lg-12 text-right">
							<button type="submit" name="lien1" class="btn btn-primary">Connexion</button>
						</div>
					</div>
					
				</form>

				</header>
				<footer>
				</footer>
			</div>

			<!-- Nav -->
			

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

		</body>
		</html>