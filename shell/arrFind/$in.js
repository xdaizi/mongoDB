// $in: 数组或
const db = connect('demo')
// 查询interest中有看电影或者看书的数据
db.company.find(
    {interest:{$in:["看电影","看书"]}},
    {'name': true, 'interest': true, "_id": false}
)