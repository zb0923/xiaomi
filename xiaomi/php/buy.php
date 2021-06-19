<?php
	header('Content-Type: text/html; charset=utf8;');
	$wupian=$_GET['wupian'];
	$shoujia=$_GET['shoujia'];
	
	$conn=mysqli_connect("127.0.0.1","root","","xiaomi"); 
	
	
	$sql="INSERT INTO `gouwuche` VALUES (null,'hhhh','$wupian','$shoujia')";
	$result=mysqli_query($conn,$sql);
	
	// $sql = "SELECT * FROM `gouwuche` WHERE `wupian`='$wupian'";
	// $result=mysqli_query($conn,$sql);
	// $arr = mysqli_fetch_all($result,MYSQLI_ASSOC);
	
	
	
	if($result){
		echo 1;
	}else{
		echo 0;
	}
	
	// 断开链接
	mysqli_close($conn);
?>