const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const { WebcastPushConnection } = require('tiktok-live-connector');

app.get('/', (req, res) => {
    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexHtmlPath);
});

io.on('connection', (socket) => {
    socket.emit('chat', null);
});


const runLive = () => {
    // Username of someone who is currently live
    let tiktokUsername = "trangno_hihi";

    // Create a new wrapper object and pass the username
    let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

    // Connect to the chat (await can be used as well)
    tiktokLiveConnection.connect().then(state => {
        console.info(`Connected to roomId ${state.roomId}`);
    }).catch(err => {
        console.error('Failed to connect', err);
    })

    // Define the events that you want to handle
    // In this case we listen to chat messages (comments)
    tiktokLiveConnection.on('chat', data => {
        console.log(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
        io.emit('chat', data);
    })

    // And here we receive gifts sent to the streamer
    tiktokLiveConnection.on('gift', data => {
        console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
    })
}

runLive()

http.listen(3000, () => {
    console.log('Server started on http://localhost:3001');
});