function obj2str(obj) {
  obj.t = new Date().getTime();
  let res = [];
  for (let key in obj) {
    //出现中文需要进行转码，encodeURIComponent()
    //URL中只能出现字母数字下划线和ASCII码
    res.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }
  return res.join("&");
}

function Ajax(url, obj, timeout = 0, success, error) {
  //0.将对象转换成字符串格式
  let str = obj2str(obj); //key=value&key=value
  var xmlHttp = null;
  //1.创建一个异步对象
  if (window.XMLHttpRequest) {
    // code for all new browsers
    xmlHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // code for IE5 and IE6
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  //2.设置请求方式和请求地址
  /* method方式:GET/POST
        url:文件在服务器上的位置
        async:true/false
       */
  xmlHttp.open("GET", url + "?" + str, true);
  //3.发送请求
  xmlHttp.send();
  //4.监听状态变化
  xmlHttp.onreadystatechange = function (ev2) {
    //5.处理返回结果
    /*
        状态变化的过程：
        0: 请求未初始化
        1: 服务器连接已建立
        2: 请求已接收
        3: 请求处理中
        4: 请求已完成，且响应已就绪
         */
    if (xmlHttp.readyState == 4) {
      clearInterval(timer); //如果接收到请求，清楚超时定时器
      //根据HTTP状态码来判断是否接到服务器数据
      if ((xmlHttp.status >= 200 && xmlHttp.status < 300) || xmlHttp.status === 304) {
        // console.log("收到服务器返回的数据");
        success(xmlHttp); //返回异步对象
      } else {
        error();
      }
    }
  };
  //根据超时时间，请求终止
  if (timeout) {
    var timer = setInterval(function () {
      console.log("请求超时");
      xmlHttp.abort();
      clearInterval(timer);
    }, timeout);
  }
}
