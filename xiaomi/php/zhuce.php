<?php
	$username=$_GET['zhuceusername'];
	$password=$_GET['zhucepassword'];
	
	$conn=mysqli_connect("127.0.0.1","root","root","sz2105"); 
	
	
	$sql = "SELECT * FROM `user` WHERE `username`='$username'";
	$result=mysqli_query($conn,$sql);
	$arr = mysqli_fetch_all($result,MYSQLI_ASSOC);
	if($arr){
		echo '用户名已注册';
	}else{
		$sql="INSERT INTO `users` VALUES (null,'$username','$password')";
		$result=mysqli_query($conn,$sql);
		echo '注册成功';
	}
	
	// 断开链接
	mysqli_close($conn);
?>