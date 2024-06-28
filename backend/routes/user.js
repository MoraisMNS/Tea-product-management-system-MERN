/*const router = require("express").Router();
let User = require("../models/User");


router.route("/register").post((req,res,next)=>{

    const name = req.body.name;  
    const email = req.body.email;
    const password = req.body.password;
    
  
    const newUser = new User({
      name,
      email,
      password
    })
  
    newUser.save().then(()=>{
      res.json("User Logged in")
    }).catch((err)=>{
      console.log(err);
    })
  })

  module.exports = router;

  router. route("/login").post((req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
    .then(user => {
      if(user){
        if(user.password === password){
          res.json("Success")

        }else{
          res.json("The password is incorrect")
        }
      }else {
        res.json("No record existed")
      }
    })

  })
  module.exports = router;*/

  const router = require("express").Router();
const User = require("../models/User");

router.route("/register").post((req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required." });
  }


  const newUser = new User({
    name,
    email,
    password,
  });

  newUser.save()
    .then(() => {
      res.json("User Registered");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/login").post((req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record exists");
      }
    });
});

module.exports = router;
