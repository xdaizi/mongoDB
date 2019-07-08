// 修改数据
var db = connect('demo')
// // 这样修改只剩下{sex: 0}
// db.company.update({name: 'MinJie'}, {sex: 0})

var workmate3={
    name:'MinJie',
    age:20,
    sex:0,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}
db.company.update({name: 'MinJie'}, workmate3)
print('修改成功')