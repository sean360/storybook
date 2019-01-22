const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('up and running son...');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});