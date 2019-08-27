<?php

header('Content-Type:text/html;charset=utf-8'); // 设置文件编码方式
header('Access-Control-Allow-Origin: http://127.0.0.1:5500'); // CORS允许跨域


$servername = 'localhost:3306';
$username = 'root';
$password = 'root';
$dbname = '1907';

$conn = mysqli_connect($servername, $username, $password, $dbname);


if(!$conn) {
  die('数据库连接失败');
}