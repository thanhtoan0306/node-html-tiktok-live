const { WebcastPushConnection } = require('tiktok-live-connector');
// Create a new wrapper object and pass the username

const runTiktok = (tiktokId, io) => {
    let tiktokLiveConnection = new WebcastPushConnection(tiktokId);
    //communicate to frontent
    io.on('connection', (socket) => {
        socket.emit('chat', null);
    });

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

    tiktokLiveConnection.on('roomUser', data => {
        io.emit('roomUser', data);
    })

    tiktokLiveConnection.on('member', data => {
        io.emit('member', data);
    })

    return tiktokLiveConnection;
}

const stopTiktok = (tiktokLiveConnection) => {
    if (tiktokLiveConnection) {
        tiktokLiveConnection.disconnect();
    }
}

module.exports = {
    runTiktok,
    stopTiktok
};