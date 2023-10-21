const names = require('./3-names');
const fun = require('./4-function');
const _export = require('./5-exports');

fun('Dalle');
fun(names.mahesh);
fun(names.vitthal);


console.log(_export.list);
console.log(_export.singlePerson);
