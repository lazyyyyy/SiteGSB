<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<!--
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
<head>
	<title>Mon Compte</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<link rel="stylesheet" href="assets/css/main.css" />
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
</head>
<body class="right-sidebar">
	<div id="page-wrapper">
        
        <?php
        if(isset($_GET["newLogin"]) && $_GET["newLogin"] == "true")
        {
            ?>
            <input type="hidden" name="newLogin" id="newLogin" value="true" />
            <?php
        }
        ?>
        <?php
        if(isset($_GET["newMdp"]) && $_GET["newMdp"] == "true")
        {
            ?>
            <input type="hidden" name="newMdp" id="newMdp" value="true" />
            <?php
        }
        ?>

		<!-- Main -->
		<div class="wrapper style1">
            
            <div>
                <a href="modifierIdentifiant.php" >Changer mon identifiant de connexion</a>
            </div>
            <div>
                <a href="modifierMdp.php">Changer mon mot de passe</a>
            </div>
            <div>
                <a href="modifierUtilisateur.php?id=<?php echo json_decode($_SESSION["user_id_json"]) ?>">Modifier mes informations</a>
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
									<!-- <ul class="divided">
										<li>
											 article class="tweet">
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
									</ul> -->
								</section>

								<!-- Posts -->
								<section class="4u 12u(mobile)">
									<header>
										<h2 class="icon fa-file circled"><span class="label">Posts</span></h2>
									</header>
									<!-- <ul class="divided">
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
									</ul> -->
								</section>

								<!-- Photos -->
								<section class="4u 12u(mobile)">
									<header>
										<h2 class="icon fa-camera circled"><span class="label">Photos</span></h2>
									</header>
									<!-- <div class="row 25% no-collapse">
										<div class="6u">
											<a href="#" class="image fit"><img src="images/pic10.jpg" alt="" /></a>
										</div>
										<div class="6u">
											<a href="#" class="image fit"><img src="images/pic11.jpg" alt="" /></a>
										</div>
									</div>
									<div class="row 25% no-collapse">
										<div class="6u">
											<a href="#" class="image fit"><img src="images/pic12.jpg" alt="" /></a>
										</div>
										<div class="6u">
											<a href="#" class="image fit"><img src="images/pic13.jpg" alt="" /></a>
										</div>
									</div>
									<div class="row 25% no-collapse">
										<div class="6u">
											<a href="#" class="image fit"><img src="images/pic14.jpg" alt="" /></a>
										</div>
										<div class="6u">
											<a href="#" class="image fit"><img src="images/pic15.jpg" alt="" /></a>
										</div>
									</div> -->
								</section>

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
                <script src="js/monCompte.js"></script>
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