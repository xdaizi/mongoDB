// $lt: 小于
// $lte: 小于等于
// $gt: 大于
// $gte: 大于等于
// $ne: 不等于

const db = connect('demo')
db.company.find(
    {age:{$lte:30,$gte:25}}, // 查询条件 25~30
    {'name': true, 'age': true, "_id": false} // 查询结果只显示name和skill字段,_id字段不显示
)
db.company.find(
    {age:{$lte:30,$gte:25}},
    {'name': true, 'age': true, "_id": false}
)