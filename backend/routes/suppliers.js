const router = require("express").Router();
let Supplier = require("../models/Supplier");

http://localhost:8070/supplier/add

router.route("/add").post((req,res)=>{

  const firstName = req.body.firstName;  
  const lastName = req.body.lastName;
  const product = req.body.product;
  const companyName = req.body.companyName;
  const supplierId = req.body.supplierId;
  const phoneNo = req.body.phoneNo;

  const newSupplier = new Supplier({
    firstName,
    lastName,
    supplierId,
    companyName,
    product,
    phoneNo
  })

  newSupplier.save().then(()=>{
    res.json("Supplier Added")
  }).catch((err)=>{
    console.log(err);
  })
})

http://localhost:8070/supplier/

router.route("/").get((req,res)=>{
    Supplier.find().then((suppliers)=>{
      res.json(suppliers)  
    }).catch((err)=>{
        console.log(err)

    })
})

http://localhost:8070/supplier/update

/*router.route("/update/:id").put(async(req,res)=>{
    let userId1 = req.params.id;
    const {firstName,lastName,supplierId,companyName,product,phoneNo}=req.body;

    const updateSupplier = {
        firstName,
        lastName,
        supplierId,
        companyName,
        product,
        phoneNo
    }

    const update = await Supplier.findByIdAndUpdate(userId1,updateSupplier).then(() =>{
        res.status(200).send({status: "Supplier updated",user1 : update})

    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error when updating data",error: err.message});
    })

   
})
*/
router.route("/update/:id").put(async (req, res) => {
    let userId1 = req.params.id;
    const { firstName, lastName, supplierId, companyName, product, phoneNo } = req.body;
  
    const updateSupplier = {
      firstName,
      lastName,
      supplierId,
      companyName,
      product,
      phoneNo
    }
  
    try {
      const update = await Supplier.findByIdAndUpdate(userId1, updateSupplier);
      if (update) {
        res.status(200).send({ status: "Supplier updated", user1: update });
      } else {
        res.status(404).send({ status: "Supplier not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ status: "Error when updating data", error: err.message });
    }
  });
  

http://localhost:8070/supplier/delete

router.route("/delete/:id").delete(async(req,res) => {
let userId1 = req.params.id;

await Supplier.findByIdAndDelete(userId1)
.then(() =>{
    res.status(200).send({status: "Supplier deleted"});
}).catch((err)=> {
    console.log(err.message);
    res.status(500).send({status: "Error when deleting the supplier",error: err.message});
})
})

router.route("/get/:id").get(async (req,res) =>{
    let userId1 = req.params.id;
    const user1 =await Supplier.findById(userId1)
    .then(() =>{
        res.status(200).send({status: "User fetched", user1: user1})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get supplier",error:err.message})

    })
})




module.exports = router;