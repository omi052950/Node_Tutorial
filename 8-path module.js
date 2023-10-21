// Path module

const path = require('path');

// separating the path
console.log(path.sep);

// Joining the path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// basepath finder
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);


// Printing the directory
console.log(__dirname);

