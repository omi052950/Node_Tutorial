// http module

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is the home page...');
    }
    if(req.url === ' /about') {
        res.end('We are on the about page...');
    }
    res.end(`
        <h1> Ooops </h1>
        <p>The page you trying to look for is not found</p>
        <a href = "/"> Back Home </a>
    `);
});

server.listen(3000);