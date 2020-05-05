<?php
$con=mysql_connect("localhost","root","");

echo $con."<br>";

$find_db=mysql_select_db('tap2tap');

if(!$find_db){
	echo "db dosent Exist..."."<br>";

	mysql_query("CREATE DATABASE tap2tap",$con);
	echo "creating new db"."<br>";

	$find_db=mysql_select_db('tap2tap',$con);
	echo $find_db."<br>";
	echo "db connected"."<br>";

	mysql_query("CREATE TABLE tap2tap.users ( uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50) NOT NULL, pass VARCHAR(50) NOT NULL , since TIMESTAMP NOT NULL ) ENGINE = InnoDB ");
	echo "User Tables created...<br>";

	mysql_query('CREATE TABLE score(uid INT AUTO_INCREMENT PRIMARY KEY REFERENCES users,name VARCHAR(50),timetaken varchar(50),scores varchar(50),money varchar(50))');
	echo "table created...<br>";



}


{

$user=$_REQUEST['username'];
$pass=$_REQUEST['password'];


	echo $find_db."<br>";
	echo "db selected..."."<br>";
	echo "UPDATING SCORES...<br>";
	mysql_query("INSERT INTO score (uid, name, timetaken, scores, money) VALUES (NULL, 'Raj', '30', '20', '782')");
	echo "<h1>Scores updated</h1>";
}

	$close=mysql_close($con);


?>