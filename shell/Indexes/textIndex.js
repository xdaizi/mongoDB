// 全文索引
const db = connect('demo')
db.text.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.text.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// 建立全文索引
// db.text.createIndex({contextInfo:'text'})
// $text:表示使用全文索引
db.text.find({$text:{$search:"programmer family diary drink"}})
// 带drink的不查找出来
db.text.find({$text:{$search:"programmer family diary -drink"}})
// 转义符：
// love PlayGame 两个词在一起查
db.text.find({$text:{$search:"\"love PlayGame\" drink"}})