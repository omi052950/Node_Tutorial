// FS module

// 2. This is the Asysnchronous approch of the FS module in the nodeJs.


const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result)=> {
    if (err) throw err;
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=> {
        if (err) throw err;
        const second = result;
        writeFile(
            './content/result-asyn.txt',
            `Here is result: ${first}, ${second}`,
            (err, result)=> {
                if (err) throw err;
                console.log(result);
            }
        )
    })
})
