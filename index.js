const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`))