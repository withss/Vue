<?php
//值
$num = 10;
echo $num;
echo "<br>";
//数组
$arr = array(1, 2, 3, 4, 5);
print_r($arr);
echo "<br>";
echo $arr[3];
echo "<br>";
//对象
$dict = array("name" => "xiaohong", "age" => "18");
print_r($dict);
echo "<br>";
echo $dict["name"];
echo "<br>";
//循环
for ($i = 0; $i < count($arr); $i++) {
    echo $arr[$i];
    echo "<br>";
}

$index = 0;
while ($index < count($arr)) {
    echo $arr[$index++];

    echo "<br>";
}
