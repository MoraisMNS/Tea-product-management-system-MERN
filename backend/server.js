const express  = require("express");
const mongoose  = require("mongoose");
const bodyParser  = require("body-parser");
const cors  = require("cors");
const dotenv  = require("dotenv");
const app  = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Connection success!");
})


  const supplierRouter = require("./routes/suppliers.js");
  http://localhost:8070/supplier
  app.use("/supplier",supplierRouter)
  
  const purchaserRouter = require("./routes/purchasers.js");
  http://localhost:8070/purchaser
  app.use("/purchaser",purchaserRouter)

  const userRouter = require("./routes/user.js")
  app.use("/user",userRouter)
  


    
  
  app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`);

    
})