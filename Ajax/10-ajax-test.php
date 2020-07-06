<?php
//1.定义字典保存商品信息
$products = array(
    "nz" => array("title" => "甜美女装", "des" => "人见人爱", "img" => "img/nz.jpg"),
    "bb" => array("title" => "漂亮包包", "des" => "花见花开", "img" => "img/bb.jpg"),
    "tx" => array("title" => "可爱拖鞋", "des" => "人见人拖", "img" => "img/tx.jpg")
);
//2.获取前端传递参数
$name = $_POST["name"];
// echo $name;
//3.根据前端传入的key，获取对应的字典
$product = $products[$name];
// print_r($product);
//4.取出字典里面的内容
echo $product["title"];
echo "|";
echo $product["des"];
echo "|";
echo $product["img"];
/* sleep(2);
echo ($_GET["name"]);
echo ($_GET["age"]); */
// echo ($_POST["name"]);
// echo ($_POST["age"]);