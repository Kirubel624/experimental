const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token; //headers since we will be providing our access token in headers
    if(authHeader){
        const token = authHeader.split(" ")[1]; // to add space between bearer and access token
      jwt.verify(token, process.env.JWT_SEC,(err,user)=>{
          if(err) res.status(403).json("Token is invalid!")
          req.user = user;
          next(); //to continue running pur request after verification 
        });
    }else{
        return res.status(401).json("Invalid request! User not allowed tokennnnnn!");
    }
};

const verifyTokenAndusername = (req,res,next)=>{
  verifyToken(req,res,()=>{
      if(req.user.userName === req.params.userName ){
          next();
      }else{
          res.status(403).json("Invalid request! User not registered !");
      }
  });
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin || req.user.isSuperAdmin){
            next();
        }else{
            res.status(403).json("Invalid request! User not allowed!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("Invalid request! User not allowed no tokemnmm!");
      }
    });
  };

  const verifyTokenAndSuperAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isSuperAdmin) {
        next();
      } else {
        res.status(403).json("Invalid request! User not allowed!");
      }
    });
  };

  const verifyTokenAndDeliveryMan = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isDeliveryMan) {
        next();
      } else {
        res.status(403).json("Invalid request! User not allowed!");
      }
    });
  };

  const verifyTokenAndUser = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user) {
        next();
      } else {
        res.status(403).json("Invalid request! User not allowed!");
      }
    });
  };
//exporting each function separately 
module.exports={verifyToken,
                verifyTokenAndAuthorization,
                verifyTokenAndAdmin,
                verifyTokenAndSuperAdmin,
                verifyTokenAndDeliveryMan,
                verifyTokenAndUser,
                verifyTokenAndusername};