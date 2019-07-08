// hasNext:是否还有下一条
const db = connect('demo');
const result = db.company.find();
while(result.hasNext()) {
    printjson(result.next());
};