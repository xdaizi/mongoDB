// $or: 或
const db = connect('demo')
db.company.find(
    {$or:[
        {age:{$gte:30}},
        {"skill.skillThree":'PHP'}
    ]},// 查询条件，age>= 30 或者 会php
    {'name': true, 'age': true, "_id": false}
)
db.company.find(
    {$or:[
        {age:{$gte:30}},
        {"skill.skillThree":'PHP'}
    ]},
    {'name': true, 'age': true, "_id": false}
)
