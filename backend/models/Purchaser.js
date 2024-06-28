const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaserSchema = new Schema({
    firstName :{
        type : String,
        required : true
    },

    lastName:{
        type : String,
        required : true
    },
    purchaserId: {
        type: String,
        required : true
    },
    companyName: {
        type: String,
        required : true
    },
    amount: {
        type: String,
        required : true
    },
    phoneNo: {
        type: String,
        required : true
    },


})


const Purchaser = mongoose.model("Purchaser",purchaserSchema );

module.exports = Purchaser;
