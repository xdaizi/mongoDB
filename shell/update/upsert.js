//     upsert是在找不到值的情况下，直接插入这条数据。
// true代表没有就添加，false代表没有不添加(默认值)
// 修改数据
var db = connect('demo')

db.company.update({name:'xiaoWang123'},{$set:{age:20}},{upsert:true})
print('修改成功')