const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const path = require('path');
const { runTiktok, stopTiktok } = require('./app/tiktoklive');

// Parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexHtmlPath);
});

let instanceTiktok = null;

app.post('/submit', (req, res) => {
    // Retrieve the data from the request body
    const inputData = req.body.inputData;
    console.log('Received data:', inputData);
    instanceTiktok = runTiktok(inputData, io)
    // Send a response back to the client
    res.json({ message: 'Data received successfully' });
});

app.post('/stop', (req, res) => {
    stopTiktok(instanceTiktok);
    // Send a response back to the client
    res.json({ message: 'Disconnect successfully' });
});

http.listen(3000, () => {
    console.log('Server started on http://localhost:3001');
});