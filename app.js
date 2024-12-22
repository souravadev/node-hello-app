const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Home page");
    res.end();
});

app.get('/login', (req, res) => {
    res.send("Login page");
    res.end();
});

app.listen(8080, () => {
    console.log("server is running");
});