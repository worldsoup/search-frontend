<?php

ob_start();
require_once "config.php";
$tbl_name="tbl_users"; // Table name 

// Define $myusername and $mypassword 
$myusername=$_POST['myusername']; 
$mypassword=$_POST['mypassword']; 

// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);
$mypassword = md5($mypassword);
$sql="SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'";
$result=mysql_query($sql);

// Mysql_num_row is counting table row
$count=mysql_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1){

$row = mysql_fetch_array( $result );
// Register $myuserid and redirect to file "home.php"
session_start();
$_SESSION['myuserid'] = $row['usersID'];
header("location:home.php");
}
else {
echo "Wrong Username or Password";
}
ob_end_flush();
?>