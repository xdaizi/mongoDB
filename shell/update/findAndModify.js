var db = connect('demo') // 链接数据库
var myModify={
    findAndModify:"company", // 对应集合
    query:{name:'JSPang'}, // query的条件
    update:{$set:{age:18}},
    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
}
var ResultMessage=db.runCommand(myModify);
 
printjson(ResultMessage)