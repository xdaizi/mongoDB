// $in: 一键多值

const db = connect('demo')
db.company.find(
    {age:{$in:[25, 30]}}, // 查询条件 25或者30信息
    {'name': true, 'age': true, "_id": false} // 查询结果只显示name和skill字段,_id字段不显示
)
db.company.find(
    {age:{$in:[25, 30]}},
    {'name': true, 'age': true, "_id": false}
)