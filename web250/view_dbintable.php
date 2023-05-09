<html>
<head>
    <meta charset="utf-8">
    <title>WEB250 | Alexei Simchiv-Mattson's Amphibious Shark | View</title>
<style>
  /* The grid is used to format a table instead of a grid control on the list of Notes */
#Grid
{
font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
width:80%;
border-collapse:collapse;
margin-left: auto;
margin-right: auto;
}
#Grid td, #Grid th 
{
font-size:1em;
border:1px solid #61ADD7;
padding:3px 7px 2px 7px;
}
#Grid th 
{
font-size:1.1em;
text-align:left;
padding-top:5px;
padding-bottom:4px;
background-color:#C2D9FE;
color: lightslategray;

}
#Grid tr.odd td 
{
color:#000000;
background-color: #F2F5A9;
}

#Grid tr.even  
{
color:#000000;
background-color: white;
}
#Grid head 
{
color:#000000;
background-color:teal;
}

 </style>
</head> 
<body>
<h1>View data</h1>
<h3>Complete Inventory</h3>
 <?php 
include 'view_back.php';

include 'mysql_db.php';
$query = "SELECT * FROM `" . $inventoryTable . "` ORDER BY Make";
/* Try to insert the new car into the database */
if ($result = $mysqli->query($query)) {
   // Don't do anything if successful.
}
else
{
    echo "Error getting data from the database<br>";
}

// Create the table headers
echo "<table id='Grid' style='width: 80%'><tr>";
echo "<th style='width: 50px'>Make</th>";
echo "<th style='width: 50px'>Model</th>";
echo "<th style='width: 50px'>Asking Price</th>";
echo "</tr>\n";

$class ="odd";  // Keep track of whether a row was even or odd, so we can style it later

// Loop through all the rows returned by the query, creating a table row for each
while ($result_ar = mysqli_fetch_assoc($result)) {
    echo "<tr class=\"$class\">";
    echo "<td>" . $result_ar['Make'] . "</td>";
    echo "<td>" . $result_ar['Model'] . "</td>";
    echo "<td>";
    echo '$'.number_format($result_ar['ASKING_PRICE'],0);
    echo "</td>";
   echo "</td></tr>\n";
   
   // If the last row was even, make the next one odd and vice-versa
    if ($class=="odd"){
        $class="even";
    }
    else
    {
        $class="odd";
    }
}
echo "</table>";
$mysqli->close();
echo "<br/>\n";
//include 'footer.php';
?>
 </body>
 
</html>