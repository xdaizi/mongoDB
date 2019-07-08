// $all: 数组多项查询 
const db = connect('demo')
// 查询interest中既有看电影也有看书的数据
db.company.find(
    {interest:{$all:["看电影","看书"]}},
    {'name': true, 'interest': true, "_id": false}
)