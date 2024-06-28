const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    firstName :{
        type : String,
        required : true
    },

    lastName:{
        type : String,
        required : true
    },
    supplierId: {
        type: String,
        required : true
    },
    companyName: {
        type: String,
        required : true
    },
    product: {
        type: String,
        required : true
    },
    phoneNo: {
        type: String,
        required : true
    },


})

const Supplier = mongoose.model("Supplier",supplierSchema );

module.exports = Supplier;
