const db = connect('demo')
db.company.find(
    {"skill.skillOne": "HTML+CSS"}, // 查询条件
    {'name': true, 'skill': true, "_id": false} // 查询结果只显示name和skill字段,_id字段不显示
)
// db.company.find(
//     {"skill.skillOne": "HTML+CSS"},
//     {'name': true, 'skill': true, "_id": false}
// )