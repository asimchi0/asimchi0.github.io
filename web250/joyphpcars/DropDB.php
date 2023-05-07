<?php
/**
 * Joy of PHP sample code
 * Demonstrates how to create a database, create a table, and insert records.
 */
include 'db.php';

if (!$mysqli) { 
      die('Could not connect'); 
  } 
  echo 'Connected successfully to mySQL. <BR>'; 
  
//select a database to work with
$mysqli->select_db($dbName);
   Echo ("Selected the Cars database");

$query = "DROP TABLE IF EXISTS inventory ";
//echo "<p>***********</p>";
//echo $query ;
//echo "<p>***********</p>";
if ($mysqli->query($query) === TRUE) 
{
    echo "Database table 'INVENTORY' dropped</P>";
}
else
{
    echo "<p>Error: </p>" . $mysqli->error;
}

$query = "DROP TABLE IF EXISTS IMAGES";
//echo "<p>***********</p>";
//echo $query ;
//echo "<p>***********</p>";
if ($mysqli->query($query) === TRUE) 
{
    echo "Database table 'Images' dropped</P>";
}
else
{
    echo "<p>Error: " . mysqli_error($mysqli);
}

$mysqli->close();
include 'footer.php';
?>