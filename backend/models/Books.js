const mongoose = require("mongoose")


const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String , 
            required: true,
            unique: true
        },

        author:{
            type: String , 
            required: true, 
            },

        description:{
            type: String , 
            required: true, 
            },

        img:{
            type: String , 
            required: true, 
            },
        category:{
            type: Array , 
            required: true, 
            },
        subcategory:{
            type:Array,
            required:true,
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
        edition:{
            type: String,
            required: true,
        },
        instock:{
            type: Boolean,
            default:true
        },
       
    },{timestamps: true}
);

module.exports = mongoose.model("Books",BookSchema);