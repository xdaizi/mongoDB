db.company.find(
    {$where:"this.age>30"}, // 可以书写js函数来过滤this指向的是workmate（查询集合）本身
    {name:true,age:true,_id:false}
)