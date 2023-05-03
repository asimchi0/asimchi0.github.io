<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=UTF-8">
		<!--[if lt IE 9]>
		<script scr="http://html5shim.googlecode.com/svn/trunk/html5.js">
		</script>
		<![endif]-->
		<title>WEB250 | Alexei Simchiv-Mattson's Amphibious Shark</title>
		<link rel = "stylesheet" type = "text/css" href = "styles/default.css" />
		<script src="scripts/jquery-3.6.1.min.js"></script>
		<script src="scripts/addNavigationPHP.js"></script>
		<script src="scripts/addFooter.js"></script>
	</head>

	<body>
		<script>addNavigation();</script>
		<hr />
		<main>
			<section>
				<!-- dynamic content goes here -->
				<?php
					$sPage = $_GET["p"];
					//echo ("You picked the page: " . $sPage); 
			
					if($sPage == "") {  $sPage = "home.php"; }
					include($sPage);
				?>
			</section>
		</main>
		<hr />
		<script>addFooter();</script>
	</body>
</html>