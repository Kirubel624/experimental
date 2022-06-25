const mongoose = require("mongoose")
const Validator = require("validator");

const Donate_BookSchema = new mongoose.Schema(
    {
        
         userId: {
                type: String , 
                required: true, 
                unique:true},
    
        firstName: {
                    type: String , 
                    required: true,
                },    
                lastName: {
                    type: String , 
                    required: true,
                },
                    
        email: {
            type: String , 
            required: true,
            lowercase: true,
            validate: [Validator.isEmail, "Please provide a valid email"],
        },

        phoneNumber:{
            type: String , 
            required: true, 
            },

        address:{
            type: Array , 
            required: true, 
            },
            amount: {
                type: String , 
                required: true,
            },
            description: {
                type: String , 
                required: true,
            },

        status: {
            type: String , 
            default: "pending"
        },
       
    },{timestamps: true}
);

module.exports = mongoose.model("Donate_Book",Donate_BookSchema);