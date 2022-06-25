const mongoose = require("mongoose")


const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: [true, "Order must have a User"],
          },

        books:[
            {
            bookName:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,
              },
      },
    
    ],
    // amount: {type:Number, required:true},
    address: {type:String, required:true},
    status: {type: String , default: "pending"},
    phoneNumber: {type:String, required:true},
    
},
{timestamps: true}
);

module.exports = mongoose.model("Order",OrderSchema);