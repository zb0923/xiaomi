<?php
	header('Content-Type: text/html; charset=utf8;');
	$wupian=$_GET['wupian'];
	
	$conn=mysqli_connect("127.0.0.1","root","","xiaomi"); 
	
	
	$sql="DELETE FROM `gouwuche` WHERE `wupian`= '$wupian'";
	$result=mysqli_query($conn,$sql);

	if($result){
		echo 1;
	}else{
		echo $wupian;
	}
	
	// 断开链接
	mysqli_close($conn);
?>