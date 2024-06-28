const router = require("express").Router();
let Purchaser = require("../models/Purchaser");



/*router.route("/add2").post((req,res)=>{

  const firstName = req.body.firstName;  
  const lastName = req.body.lastName;
  const amount = req.body.amount;
  const companyName = req.body.companyName;
  const purchaserId = req.body.purchaserId;
  const phoneNo = req.body.phoneNo;

  const newPurchaser = new Purchaser({
    firstName,
    lastName,
    purchaserId,
    companyName,
    amount,
    phoneNo
  })

  newPurchaser.save().then(()=>{
    res.json("Purchaser Added")
  }).catch((err)=>{
    console.log(err);
  })
})

http://localhost:8070/purchaser/

router.route("/2").get((req,res)=>{
    Purchaser.find().then((purchasers)=>{
      res.json(purchasers)  
    }).catch((err)=>{
        console.log(err)

    })
})
*/
http://localhost:8070/purchaser/add
router.route("/add2").post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const amount = req.body.amount; 
    const companyName = req.body.companyName;
    const purchaserId = req.body.purchaserId;
    const phoneNo = req.body.phoneNo;
  
    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }
  
    const newPurchaser = new Purchaser({
      firstName,
      lastName,
      purchaserId,
      companyName,
      amount,
      phoneNo
    });
  
    newPurchaser
      .save()
      .then(() => {
        res.json("Purchaser Added");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Failed to add purchaser" });
      });
  });

  http://localhost:8070/purchaser/

router.route("/2").get((req,res)=>{
    Purchaser.find().then((purchasers)=>{
      res.json(purchasers)  
    }).catch((err)=>{
        console.log(err)

    })
})
  


http://localhost:8070/purchaser/update

/*router.route("/update/:id").put(async(req,res)=>{
    let userId2 = req.params.id;
    const {firstName,lastName,purchaserId,companyName,amount,phoneNo}=req.body;

    const updatePurchaser = {
        firstName,
        lastName,
        purchaserId,
        companyName,
        amount,
        phoneNo
    }

    const update = await Purchaser.findByIdAndUpdate(userId2,updatePurchaser).then(() =>{
        res.status(200).send({status: "Purchaser updated",user2 : update})

    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error when updatong data",error: err.message});
    })

   
})*/
router.route("/update2/:id").put(async (req, res) => {
    let userId2 = req.params.id;
    const { firstName, lastName, purchaserId, companyName, amount, phoneNo } = req.body;
  
    const updatePurchaser = {
      firstName,
      lastName,
      purchaserId,
      companyName,
      amount,
      phoneNo
    }
  
    try {
      const update = await Purchaser.findByIdAndUpdate(userId1, updatePurchaser);
      if (update) {
        res.status(200).send({ status: "Purchaser updated", user2: update });
      } else {
        res.status(404).send({ status: "Purchaser not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: "Error when updating data", error: err.message });
    }
  });
  




http://localhost:8070/purchaser/delete

router.route("/delete2/:id").delete(async(req,res) => {
let userId2 = req.params.id;

await Purchaser.findByIdAndDelete(userId2)
.then(() =>{
    res.status(200).send({status: "Purchaser deleted"});
}).catch((err)=> {
    console.log(err.message);
    res.status(500).send({status: "Error when deleting the purchaser",error: err.message});
})
})

router.route("/get/:id").get(async (req,res) =>{
    let userId2 = req.params.id;
    const user2 =await Purchaser.findById(userId2)
    .then(() =>{
        res.status(200).send({status: "User fetched", user2: user2})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get purchaser",error:err.message})

    })
})



module.exports = router;
