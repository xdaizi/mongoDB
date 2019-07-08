// $size: 数组个数查询
const db = connect('demo')
// 查询interest长度为5的数据
db.company.find(
    {interest:{$size: 5}},
    {'name': true, 'interest': true, "_id": false}
)