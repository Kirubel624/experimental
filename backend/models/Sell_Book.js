const mongoose = require("mongoose")


const Sell_BookSchema = new mongoose.Schema(
    {
        
        userId: {
            type: String , 
            required: true, 
            unique:true
        },
        title: {
            type: String , 
            required: true,
        },

        author:{
            type: String , 
            required: true, 
            },

        description:{
            type: String , 
            required: true, 
            },
        condition:{
            type: String,
            required: true
        },
        img:{
            type: String , 
            required: true, 
            },
        category:{
            type: Array , 
            required: true, 
            },
        price:{
              type: String , 
              required: true, 
              }, 
        ISBN:{
            type: String , 
            required: true, 
            unique:true
            },
        pages:{
            type: String , 
            required: true, 
        },
        year_purchased:{
            type: Date,
            required: true,
        },
        status: {
            type: String , 
            default: "pending"
        },
       
       
    },{timestamps: true}
);

module.exports = mongoose.model("Sell_Book",Sell_BookSchema);