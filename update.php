<?php
$name=$_REQUEST['name'];
$money=$_REQUEST['money'];
$time=$_REQUEST['time'];
$hits=$_REQUEST['hits'];
$speed=$_REQUEST['speed'];
$deadby=$_REQUEST['deadby'];
echo "Speed: $speed numbers per second";

$con=mysqli_connect("localhost","root","");


$find_db=mysqli_select_db($con,'tap2tap');

if(!$find_db){
	mysqli_query($con,"CREATE DATABASE tap2tap");
	$find_db=mysqli_select_db($con,'tap2tap');
//	mysql_query($con,"CREATE TABLE tap2tap.users ( uid INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50) NOT NULL, pass VARCHAR(50) NOT NULL , since TIMESTAMP NOT NULL ) ENGINE = InnoDB ",$con);
	mysqli_query($con,'CREATE TABLE score(uid INT AUTO_INCREMENT UNIQUE ,name VARCHAR(50),timetaken INT,scores INT,money INT,speed FLOAT,deadby INT, record TIMESTAMP NOT NULL) ENGINE = InnoDB ');
}

{

	mysqli_query($con,"INSERT INTO score (uid, name, timetaken, scores, money, speed, deadby, record) VALUES (NULL, '$name' , ".$time.", ".$hits.", ".$money.",".$speed.",".$deadby.",NULL)");

}
	$close=mysqli_close($con);
?>