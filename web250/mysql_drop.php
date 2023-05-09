<?php
include 'view_back.php';

include 'mysql_db.php';

if (!$mysqli) { 
      die('Could not connect'); 
  } 
  echo 'Connected successfully to mySQL. <BR>'; 
  
//select a database to work with
$mysqli->select_db($dbName);
   Echo ("Selected the database <br>");

$query = "DROP TABLE IF EXISTS `" . $inventoryTable . "`";
//echo "<p>***********</p>";
//echo $query ;
//echo "<p>***********</p>";
if ($mysqli->query($query) === TRUE) 
{
    echo "Database table dropped</P>";
}
else
{
    echo "<p>Error: </p>" . $mysqli->error;
}

$mysqli->close();
//include 'footer.php';
?>