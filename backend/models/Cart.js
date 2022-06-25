const mongoose = require("mongoose")


const CartSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: [true, "Reward must have a User"],
          },

        Books:[
            {
            bookId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,
              },
      },
    
    ],
},
{timestamps: true}
);

module.exports = mongoose.model("Cart",CartSchema);