// 修改数据
var db = connect('demo')

// $inc 对value值的修改，但是修改的必须是数字 相当于age + 2
db.company.update({name: 'ShengLei'}, {"$inc": {age: 2}})
print('修改成功')