 <?php
$serverName = 'serverName';
$userID  = 'userID';
$password = 'password';
$dbName = 'dbName';

$mysqli = new mysqli($serverName, $userID , $password,  $dbName);

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
//select a database to work with
$mysqli->select_db($dbName);
 
?>