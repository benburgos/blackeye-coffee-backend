require('dotenv').config();

const express = require('express');
const app = express();

app.listen(3000, () => console.log(`You're on port ${3000}`));
