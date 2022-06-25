const router = require("express").Router();
const Users = require("../models/Users");
const CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const AppErorr = require('../AppError');
//REGISTER
router.post("/register", async (req,res)=>{
    
    // const salt = await bcrypt.genSalt(10);
    // const newUser = new Users({
    //     userName: req.body.userName,
    //     email: req.body.email,
    //     phoneNumber: req.body.phoneNumber,
    //     password:(await bcrypt.hash(req.body.password, salt)).toString(),

    // });

    // try {
    //     const savedUser = await newUser.save();
    //     res.status(201).json(savedUser);

    //   } catch (err) { 
    //     res.status(500).json(err);
        
    // }
    
    const newUser = await Users.create(req.body);


  
    res.status(200).json({
      success: "success",                              

      data: newUser,
    });



    
});
//LOGIN

router.post("/login", async(req,res, next)=>{
  const { email, password} = req.body;

  if (!email || !password) {
    return next(new AppErorr("email and password must be provided!", 401));
  }

   

        const user = await Users.findOne({email:email }).select("+password"); 
       
        //condition if there is no user
       if( !user||!(await user.correctPassword(password, user.password))) 
       { return res.status(401).json("Invalid Username or password!");}

       console.log(user);
        // const validPassword = bcrypt.compare(req.body.password, user.password);
        //const OriginalPassword = validPassword.toString();
      
          // if(!validPassword){
          // return res.status(401).json("Invalid Password!"); }
     
        //decrypting the password
     /*  const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
          );
          const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      
          OriginalPassword !== req.body.password &&
            res.status(401).json("Invalid Password!");
        //creating a jsonwebtoken
*/
        const accessToken = jwt.sign(
            {
               id: user._id, 
               isAdmin: user.isAdmin, 
               isSuperAdmin: user.isSuperAdmin,
               isDeliveryMan: user.isDeliveryMan,
               userName: user.userName
        },
        process.env.JWT_SEC,
        {expiresIn: process.env.JWT_EXPIRES_IN
        });
        //hi+ding the password
        // const { ...others } = user._doc;

       //if value is correct 
       res.status(200).json({
        status: "success",
        
        data: {

          userName: user.userName,
        isAdmin: user.isAdmin,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          accessToken
        },
      });

    //    res.status(200).json({
    //      ...others,accessToken}) ;
       
      





//       try {

//         const user = await Users.findOne({  userName: req.body.userName }).select("+password"); 
       
//         //condition if there is no user
//        if( !user) 
//        { return res.status(401).json("Invalid Username!");}


//         const validPassword = bcrypt.compare(req.body.password, user.password);
//         //const OriginalPassword = validPassword.toString();
      
//           if(!validPassword){
//           return res.status(401).json("Invalid Password!"); }
     
//         //decrypting the password
//      /*  const hashedPassword = CryptoJS.AES.decrypt(
//             user.password,
//             process.env.PASS_SEC
//           );
//           const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      
//           OriginalPassword !== req.body.password &&
//             res.status(401).json("Invalid Password!");
//         //creating a jsonwebtoken
// */
//         const accessToken = jwt.sign(
//             {
//                id: user._id, 
//                isAdmin: user.isAdmin, 
//                isSuperAdmin: user.isSuperAdmin,
//                isDeliveryMan: user.isDeliveryMan,
//                userName: user.userName
//         },
//         process.env.JWT_SEC,
//         {expiresIn: process.env.JWT_EXPIRES_IN
//         });
//         //hiding the password
//         const {password, ...others } = user._doc;

//        //if value is correct 
//        res.status(200).json({...others, accessToken}) ;
       
//     } catch (err) {
//         res.status(500).json(err)


});
    

module.exports = router;

  