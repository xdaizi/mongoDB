// $not: 非 
const db = connect('demo')
db.company.find(
    {
        age:{
            $not:{
                $lte:30,
                $gte:20
            }
        }
    },// 查询条件：age < 20 或 age > 30
    {'name': true, 'age': true, "_id": false}
)
db.company.find(
    {
        age:{
            $not:{
                $lte:30,
                $gte:20
            }
        }
    },
    {'name': true, 'age': true, "_id": false}
)
11 - 627
