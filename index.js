const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.set("views", "./views");
app.get("/", (req, res) => {
    res.render("index", { variableName: "Hello World 12212!" })
})

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})