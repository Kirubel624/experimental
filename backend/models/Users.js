const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const Validator = require("validator");
const etPhone = require('ethiopian-phone');

let phone;

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String , 
            required: true, 
            unique:true},

        email:{
            type: String , 
            required: true, 
            unique:true,
            lowercase: true,
            validate: [Validator.isEmail, "Please provide a valid email"],
        },

        phoneNumber:{
            type: String , 
            required: true, 
            unique:true,
        },

        password:{
            type: String , 
            required: true,
            select:false,
            minlength:8,
            },
        isAdmin:{
            type:Boolean,
            default:false,
        },
        isSuperAdmin:{
            type:Boolean,
            default:false,
        },
        isDeliveryMan:{
            type:Boolean,
            default:false,
        },
        orders: [
            {
              type: mongoose.Schema.ObjectId,
              ref: "Order",
            },
          ],
        
    },{timestamps: true}
);
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.passwordConfirm = undefined;
    next();
  });
  UserSchema.methods.correctPassword = async function (password1, password2) {
    return await bcrypt.compare(password1, password2);
  };
module.exports = mongoose.model("User",UserSchema);