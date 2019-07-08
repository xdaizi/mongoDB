// 普通查询
var startTime = new Date().getTime()  //得到程序运行的开始时间
var db = connect('demo')          //链接数据库
var rs = db.randomInfo.find({username:"tfruhjy8k"})  //根据用户名查找用户
rs.forEach(rs=>{printjson(rs)})                     //循环输出
var  runTime = new Date().getTime()-startTime;      //得到程序运行时间
print('[SUCCESS]This run time is:'+runTime+'ms')    //打印出运行时间
// 普通查询 --- 344ms


// db.randomInfo.createIndex({username:1})

// 建立索引后大概查询4ms左右