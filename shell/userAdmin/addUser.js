// 添加用户
db.createUser({
    user:"rex", // 用户名
    pwd:"123456", // 密码
    customData:{ // 相关备注信息
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:[ // 数据库的权限
        // demo库有读写权限，其余只有读权限
        {
            role:"readWrite",
            db:"demo"
        },
        'read'
    ]
})