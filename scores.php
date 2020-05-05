<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 80%;
    border-collapse: collapse;

}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
//$q = intval($_GET['q']);
$i=0;
$con = mysqli_connect('localhost','root','');

if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"tap2tap");

$sql="SELECT * FROM score ORDER BY money DESC";

$result = mysqli_query($con,$sql);
if($result){
echo "<center><span  style='font-size:200%'>Today's Leader</span></center><table align=center>
<tr>
<th>Name</th>
<th>Money</th>
<th>Hits</th>
<th>Time Lasted (Seconds)</th>
<th>Speed</th>
<th>Last played</th>
</tr>";
while($row = mysqli_fetch_array($result) and $i==0) {
$i++;

    echo "<tr>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['money'] . "</td>";
    echo "<td>" . $row['scores'] . "</td>";
    echo "<td>" . $row['timetaken'] . "</td>";
    echo "<td>" . $row['speed'] . "</td>";
    echo "<td>" . $row['record'] . "</td>";
    echo "</tr>";
	
}
echo "</table>";
}
$i=0;


//$sql="SELECT * FROM score ORDER BY money DESC";

$result = mysqli_query($con,$sql);
if($result){
echo "<center><span style='font-size:200%'>Top 5 List</span></center><table align=center>
<tr>
<th>Name</th>
<th>Money</th>
<th>Hits</th>
<th>Time Lasted (Seconds)</th>
<th>Speed</th>
<th>Last played</th>
</tr>";
while($row = mysqli_fetch_array($result) and $i!=5) {
    echo "<tr>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['money'] . "</td>";
    echo "<td>" . $row['scores'] . "</td>";
    echo "<td>" . $row['timetaken'] . "</td>";
    echo "<td>" . $row['speed'] . "</td>";
    echo "<td>" . $row['record'] . "</td>";
    echo "</tr>";
	$i++;
}
echo "</table>";
}
mysqli_close($con);

?>
</body>
</html>