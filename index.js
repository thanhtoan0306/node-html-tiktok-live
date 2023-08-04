const http = require('http');
const runTiktok = require('./app/tiktoklive');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>Hello World3!</h1></body></html>');
    res.end();
});

runTiktok();

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});