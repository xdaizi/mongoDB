// $and: 且 
const db = connect('demo')
db.company.find(
    {interest:['画画','聚会','看电影']}, // 查询爱好为'画画','聚会','看电影'的数据
    {'name': true, 'interest': true, "_id": false}
)
db.company.find(
    {interest:['画画','聚会','看电影']},
    {'name': true, 'interest': true, "_id": false}
)
db.company.find(
    {interest:['看电影']}, // 查询爱好只为看电影的数据
    {'name': true, 'interest': true, "_id": false}
)
db.company.find(
    {interest:'看电影'}, // 查看爱好中有看电影的数据
    {'name': true, 'interest': true, "_id": false}
)