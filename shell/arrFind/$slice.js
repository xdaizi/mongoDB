// $slice: 显示选项
const db = connect('demo')
// 查询出来的数据中interest显示两个
db.company.find(
    {},
    {'name': true, 'interest': {$slice:2}, "_id": false}
)
// 查询出来的数据中interest显示最后一个
db.company.find(
    {},
    {'name': true, interest: {$slice:-1}, "_id": false}
)