const express = require('express');
const app = express();
const ejs = require('ejs');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let counter = 0;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { counter });
});

io.on('connection', (socket) => {
    socket.emit('counter', counter);
});

setInterval(() => {
    counter++;
    io.emit('counter', counter);
}, 1000);

http.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});