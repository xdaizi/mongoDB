// 修改数据
var db = connect('demo')

// $unset 删除对应的key的值
db.company.update({name: 'MinJie'}, {"$unset": {age: 18}})
print('修改成功')