// server.js
const express = require('express');
const bodyParser = require('body-parser');
const matrixMultiply = require('./matrixMultiply'); // Assume you have a separate module for matrix multiplication

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/multiply', (req, res) => {
    const { matrixA, matrixB } = req.body;
    const result = matrixMultiply(matrixA, matrixB);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
