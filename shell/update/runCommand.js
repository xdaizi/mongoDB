// 
// 修改数据
var db = connect('demo')

// $set 修改对应的key的值
db.company.update({sex:1} , {$set:{money:4000}}, {upsert: false, multi: true})
var resultMessage = db.runCommand({getLastError:1})
printjson(resultMessage)