<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
	<title>Mes comptes rendus </title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body class="right-sidebar">
        
        <input type="hidden" name="idUser" id="idUser" value="<?php echo json_decode($_SESSION["user_id_json"]) ?>" />
        
		<!-- Main -->
		<div class="wrapper style1">

			<div class="container">
                
                <div id="enCoursElt">
                    <div><label>Mes comptes rendus</label></div>
                    <div>
                        <table border="1" class="default">
                        <thead>
                            <tr>
                                <th style="font-weight:bold; width:10%;">N°</th>
                                <th style="font-weight:bold; width:40%;">Praticien</th>
                                <th style="font-weight:bold; width:30%;">Date de création</th>
                            </tr>
                        </thead>
                        <tbody id="tableau">

                        </tbody>
                    </table>
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
        <script src="js/ajax.js"></script>
        <script src="js/mesComptesRendus.js"></script>
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