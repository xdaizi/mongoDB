// $and: 且 
const db = connect('demo')
db.company.find(
    {$and:[
        {age:{$gte:30}},
        {"skill.skillThree":'PHP'}
    ]}, // 查询条件，age>= 30 且 会php
    {'name': true, 'age': true, "_id": false}
)
db.company.find(
    {$and:[
        {age:{$gte:30}},
        {"skill.skillThree":'PHP'}
    ]},
    {'name': true, 'age': true, "_id": false}
)
