// limit每次返回的数据个数，skip：跳过多少个开始返回，组合实现分页
// 从0开始返回两个
db.company.find(
    {},
    {name:true,age:true,_id:false}
).limit(2).skip(1)