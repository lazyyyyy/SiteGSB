<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Gestion des frais</title>
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
              
				<form action="js/ajoutGestionFrais.php" method="post" enctype="multipart/form-data">
                    <div>
                        <label id="reponse">
                            <?php
                            if(isset($_GET["erreur"]))
                            {
                                if($_GET["erreur"] == 1)
                                {
                                    echo "Erreur : Opération échouée";
                                }
                                else
                                {
                                    echo "Opération effectuée avec succès";
                                }
                            }
                            ?>
                        </label>
                    </div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Type de Frais </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<select name="typeFrais" class="form-control" style="display:inline;" id="typeDeFrais">
		 						
		 					</select>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Date </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<input type="date" class="form-control" name="date" id="date" required />
                            <div id = "messageDate"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Montant </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<input type="text" class="form-control" name="montant" required />
						</div>
					</div>
                    <div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Commentaire </label>
						</div>
						<div class="col-lg-10 col-xs-10">
							<textarea class="form-control"name="commentaire" rows="3"></textarea>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 col-xs-2 text-right">
							<label>Pièce jointe </label>
						</div>
						<div class="col-lg-10 col-xs-10">
                                <input type="file" class="form-control" name="fichier"/>
						</div>
					</div>
                    <div id="json"><?php echo $_SESSION["user_id_json"] ?></div>
                    
                    <input type="hidden" name="id_utilisateur" id="id_utilisateur" />
                    
					<div class="row">
						<div class="col-xs-12 col-lg-12 text-right">
							<input type="submit" name="lien1" value="Enregistrer" class="btn btn-success" />
						</div>
					</div>
				</form>
			
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
        <script src="js/gestiondesfrais.js"></script>
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