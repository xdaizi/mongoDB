// 模拟一个用户登录日志表的信息
var userName = "xiaohua";
var timeStamp = Date.parse(new Date());
var jsonDataBase = {
    "loginUser": userName,
    "loginTime": timeStamp
};
var db = connect('demo'); // 链接数据库
db.login.insert(jsonDataBase); // 插入数据
print("success");