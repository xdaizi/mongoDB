// 对比批量插入和循环插入的性能
const startTime = (new Date()).getTime()
const LEN = 100000
const db = connect('demo')
for (let i = 0; i < LEN; i++) {
    db.test.insert({num: i})
}
const endTime = (new Date()).getTime()
const runTime = endTime - startTime
print('ok，用了' + runTime)