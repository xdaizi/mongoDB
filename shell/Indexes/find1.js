// 复合索引，多个索引

var startTime=new Date().getTime();
var db = connect('demo');
 
// hint:指定优先使用的索引
var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});
 
rs.forEach(rs=>{printjson(rs)});
 
 
var runTime = new Date().getTime()-startTime;
print('[Demo]this run time is '+runTime+'ms');

// 再创建一个索引
// db.randomInfo.createIndex({randNum0:1})
// 删除索引
// db.randomInfo.dropIndex('randNum0_1');//索引的唯一ID