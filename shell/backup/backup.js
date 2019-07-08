// 1.备份
//     mongodump
//     --host 127.0.0.1    (ip地址)
//     --port 27017    (端口号)
//     --out D:/databack/backup    (备份的文件路径)
//     --collection myCollections  (需要备份的集合)
//     --db test   (需要备份的数据库)
//     --username username (用户名)
//     --password password (密码)
//     如下：
//         mongodump --host 127.0.0.1 --port 27017 --out D:/databack/
// 2.恢复
//         mongorestore --host 127.0.0.1 --port 27017 D:/databack/