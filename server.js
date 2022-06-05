require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('hello')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`You're on port ${PORT}`));
