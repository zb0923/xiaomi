<?php
	$username=$_POST['username'];
	$password=$_POST['password'];
	
	$link=mysqli_connect("127.0.0.1","root","root","sz2105"); 
	// 连接数据库
	$res = mysqli_query($link,"select * from user where username='$username'");
	
	$row = mysqli_fetch_assoc($res);
	if($row){
		if($row['password']===$password){
			$arr = [
				"meta"=>[
					"status"=>0,
					"msg"=>"登陆成功"
				]
			];
		}else{
			$arr = [
				"meta"=>[
					"status"=>1,
					"msg"=>"用户名或密码错误"
				]
			];
		}
	}else{
		$arr = [
			"meta"=>[
				"status"=>2,
				"msg"=>"用户名不存在"
			]
		];
	}
	echo json_encode($arr);

?>