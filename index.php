<?php


	// var_dump($_SERVER);
	// $path=null;
	// 默认文件夹名称
	$dir='main';
	// 默认文件名称
	$filename='index';
	// 判断路径是否存在
	if(array_key_exists('PATH_INFO', $_SERVER)){
		// 获取URL路径
		$path=$_SERVER['PATH_INFO'];
		// /main/index
		// 去掉第一个斜杠 main/index
		$str=substr($path, 1);
		// 按照斜杠分割目录名称和文件夹名称
		$arr=explode('/', $str);
		if(count($arr)==2){
			// 覆盖默认的目录名称
			$dir=$arr[0];
			// 覆盖默认的文件名称
			$filename=$arr[1];
		}else{
			// 不符合要求，跳转到登录页面
			$filename='login';
		}

		
		
	}
// 嵌入一个子页面
	include('./views/'.$dir.'/'.$filename.'.html');
	// else{
	// 	echo "no";
	// }

	// include('./views/main/login.html')
?>