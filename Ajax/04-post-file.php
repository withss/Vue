<?php
/* print_r($_POST);
echo "<br>";
print_r($_FILES); */
//1.获取长传文件保存的字典
$fileInfo = $_FILES["fig"];
//2.获取上传文件的名称
$fileName = $fileInfo["name"];
//3.获取上传文件保存的路径
$filePath = $fileInfo["tmp_name"];
//4.移动文件路径
move_uploaded_file($filePath, "../figure/" . $fileName);

echo $fileName;
echo "<br>";
print_r($fileInfo);
