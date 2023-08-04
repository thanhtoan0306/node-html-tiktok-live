const express = require('express');
const app = express();
const path = require('path');

// Setting EJS as templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routing
app.get('/', (req, res) => {
    res.render('index');
});

// Starting the server
app.listen(3000);