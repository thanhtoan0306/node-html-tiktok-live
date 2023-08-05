const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

let counter = 0;
app.get('/', (req, res) => {
    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexHtmlPath);
});

io.on('connection', (socket) => {
    socket.emit('counter', counter);
});

setInterval(() => {
    counter++;
    io.emit('counter', counter);
}, 1000);

http.listen(3000, () => {
    console.log('Server started on http://localhost:3001');
});