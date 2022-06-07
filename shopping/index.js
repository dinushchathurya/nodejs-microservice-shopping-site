const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.json({
        message: 'Hello from Shopping Service'
    });
})

app.listen(8003, () => {
    console.log('Shopping Service is running on port 8003');
})