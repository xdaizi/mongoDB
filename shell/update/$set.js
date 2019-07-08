// 修改数据
var db = connect('demo')

// $set 修改对应的key的值
db.company.update({name: 'MinJie'}, {"$set": {age: 18}})
print('修改成功')