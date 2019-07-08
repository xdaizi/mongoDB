// 对比批量插入和循环插入的性能
const startTime = (new Date()).getTime()
const LEN = 100000
const tempArr = []
for (let i = 0; i < LEN; i++) {
    tempArr.push({num: i})
}
const db = connect('demo')
db.test.insert(tempArr)
const endTime = (new Date()).getTime()
const runTime = endTime - startTime
print('ok，用了' + runTime)