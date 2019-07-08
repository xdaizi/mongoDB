// forEach:循环
const db = connect('demo');
const result = db.company.find();
result.forEach(v => {
    printjson(v)
});