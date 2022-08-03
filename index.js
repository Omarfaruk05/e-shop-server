const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PaymentRoutes = require("./routes/payment")
const port = process.env.PORT || 5000;


const app = express();


app.use(express());
app.use(cors());

app.use('api/payment/', PaymentRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`))