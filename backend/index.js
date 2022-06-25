const express = require('express');
const app = express();
const cors=require('cors');
const mongoose = require ("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const booksRoute = require("./routes/books");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const sell_bookRoute = require("./routes/sell_book");
const donateBookRoute = require("./routes/donate_book");
const subscribersRoute = require("./routes/subscribers");

dotenv.config();

//connecting to mongodb
mongoose
.connect(
    process.env.MONGODB_URL_LOCAL,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
.then(()=>{
console.log('Db Connected');
})
.catch((err)=> {console.log(err);
});

//creating api routes
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute); 
app.use("/api/books",booksRoute); 
app.use("/api/cart",cartRoute); 
app.use("/api/order",orderRoute);
app.use("/api/subscribers",subscribersRoute);
app.use("/api/donate_book",donateBookRoute); 
app.use("/api/sell_book",sell_bookRoute); 


app.listen(process.env.PORT || 5000,() =>{
        console.log('app running at port 5000')
    }
)