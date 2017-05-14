<?php
    include("header.php");
?>

<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Agenda </title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/agenda.css" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
        <script type="text/javascript">
            jQuery(function($){
               $('.month').hide();
               $('.month:first').show();
               $('.months a:first').addClass('active');
               var current = 1;
               $('.months a').click(function(){
                    var month = $(this).attr('id').replace('linkMonth','');
                    if(month != current){
                        $('#month'+current).slideUp();
                        $('#month'+month).slideDown();
                        $('.months a').removeClass('active'); 
                        $('.months a#linkMonth'+month).addClass('active'); 
                        current = month;
                    }
                    return false; 
               });
            });
        </script>
</head>
<body class="right-sidebar">
    <input type="hidden" name="idUser" id="idUser" value="<?php echo json_decode($_SESSION["user_id_json"]) ?>" />
    <input type="hidden" name="annee" id="annee" value="<?php echo $_GET["annee"] ?>" />
    
	<div id="page-wrapper">

		<!-- Main -->
		<div class="wrapper style1">

			<div class="container">
                
                <?php
        require('../api/agenda.php');
        $date = new Date();
        $year = $_GET["annee"];
        $events = $date->getEvents($year, json_decode($_SESSION["user_id_json"]));
        $dates = $date->getAll($year);
        ?>
        <form id="formulaire">
            Année: <input type="number" name="an" id="an" value="<?php echo $_GET["annee"] ?>" />
            <input type="submit" value="OK" />
        </form>
        <br/><br/>
        <h2><?php echo $_GET["annee"] ?></h2>
        <br/>
        <div class="periods">
           <!-- <div class="year"><?php /*echo $year; */ ?></div>-->
            <div class="months">
                <ul>
                    <?php foreach ($date->months as $id=>$m): ?>
                         <li><a href="#" id="linkMonth<?php echo $id+1; ?>"><?php echo utf8_encode(substr(utf8_decode($m),0,3)); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="clear"></div>
            <?php $dates = current($dates); ?>
            <?php foreach ($dates as $m=>$days): ?>
               <div class="month relative" id="month<?php echo $m; ?>">
               <table>
                   <thead>
                       <tr>
                           <?php foreach ($date->days as $d): ?>
                                <th><?php echo substr($d,0,3); ?></th>
                           <?php endforeach; ?>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                       <?php $end = end($days); foreach($days as $d=>$w): ?>
                           <?php $time = strtotime("$year-$m-$d"); ?>
                           <?php if($d == 1 && $w != 1): ?>
                                <td colspan="<?php echo $w-1; ?>" class="padding"></td>
                           <?php endif; ?>
                            <td <?php
                                    if($time == strtotime(date('Y-m-d')))
                                    {
                                        ?>
                                            class="today caseJour"
                                        <?php
                                    }
                                    else{
                                        ?>
                                            class="caseJour"
                                        <?php
                                    }
                                ?> id="<?php echo $year."-".$m."-".$d ?>" >
                                <div class="relative">
                                    <div class="day" ><?php echo $d; ?></div>
                                </div>
                               
                               <ul class="events">
                                   <?php if(isset($events[$time])): foreach($events[$time] as $e): ?>
                                        <li class="rdv" ></li>
                                   <?php endforeach; endif;  ?>
                               </ul>
                           </td>
                           <?php if($w == 7): ?>
                            </tr><tr>
                           <?php endif; ?>
                       <?php endforeach; ?>
                       <?php if($end != 7): ?>
                            <td colspan="<?php echo 7-$end; ?>" class="padding"></td>
                       <?php endif; ?>
                       </tr>
                   </tbody>
               </table>
               </div>
            <?php endforeach; ?>
        </div>
        <div id="listeRdv"></div>
                
                
                
                
                
				<!--<iframe src="https://calendar.google.com/calendar/embed?src=florianspadaro%40gmail.com&ctz=Europe/Paris" style="border: 0" width="100%" height="800px" frameborder="0" scrolling="no"></iframe>-->
			
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
        <script src="js/ajax.js" ></script>
        <script src="js/agenda.js" ></script>
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