// update时multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）
// 修改数据
var db = connect('demo')

// $set 修改对应的key的值
db.company.update({},{$set:{interset:[]}}, {multi:true})
print('修改成功')