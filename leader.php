<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 50%;

}

table, td, th {
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
echo "<center><span  style='font-size:200%;color:yellow;'>Today's Leader</span></center><table align=center>";
while($row = mysqli_fetch_array($result) and $i==0) {
$i++;

    echo "<tr>";
    echo "<td  rowspan=7><img src='art/yes.gif' width=250px></td></tr>";
    echo "<tr><td style='color:red;'><i><u><b>Name: " . $row['name'] . "<b></u></i></td></tr>";
	echo "<tr><td style='color:yellow;'>Money: " . $row['money'] . "</td></tr>";
    echo "<tr><td style='color:yellow;'>Hits: " . $row['scores'] . "</td></tr>";
    echo "<tr><td style='color:yellow;'>Time Lasted (Seconds): " . $row['timetaken'] . "</td></tr>";
    echo "<tr><td style='color:yellow;'>Speed: " . $row['speed'] . "</td></tr>";
    echo "<tr><td style='color:yellow;'>Last played: " . $row['record'] . "</td></tr>";
    echo "</tr>";
	
}
echo "</table>";}
mysqli_close($con);
?>
</body>
</html>