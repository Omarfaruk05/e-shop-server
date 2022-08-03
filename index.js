const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PaymentRoutes = require("./routes/payment")
const port = process.env.PORT || 5000;


const app = express();


app.use(express());
app.use(cors());

app.post('/orders', async(req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });
        console.log(process.env.KEY_ID, process.env.KEY_SECRET)
        const options = {
            amount: req.body.amount * 100,
            currency: 'INR',
            receipt:crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, (error, order) => {
          if(error){
            console.log(error);
            return res.send(500).json({message:'Something is wrong!'});  
          }
          res.status(200).json({data:order});
        });
    } 
    catch (error) {
        console.log(error);
        return res.send(500).json({message:'Internal Server Error'}); 

    }
});

app.get('/', (req, res) =>{
    res.send('e shop is running')
})
app.listen(port, () => console.log(`Listening on port ${port}`))