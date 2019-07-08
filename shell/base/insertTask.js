// 批量插入
var db = connect("demo") // 链接数据库
db.test.insert([
    {name: "卡卡西"},
    {name: "凯皇"},
    {name: "佩恩"}
])
print("ok")