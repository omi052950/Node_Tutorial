// FS module

// 1. This is the synchronous approch of the FS module of the nodeJs.

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('/Users/omtanpure/Desktop/Codes/NodeJs/Node/content/first.txt', 'utf8');
const second = readFileSync('/Users/omtanpure/Desktop/Codes/NodeJs/Node/content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is result: ${first}, ${second}`,
    {flag: 'a'}
)
