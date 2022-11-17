const mongoose = require('mongoose');

const IVSchema = new mongoose.Schema({
    name : String,
    roll : String,
    email : String,
    dept : String,
    section : String,
    date : String,
    place : String,
    staff : String,
    image:String,
});

const IV = mongoose.model("IV_DATA",IVSchema)
module.exports = IV; 