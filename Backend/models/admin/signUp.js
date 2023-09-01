// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  
   adminemail: {
    type: String,
    required: true,
  },
  adminpassword: {
    type: String,
    required: true,
  },
  adminverified:{
    type:Boolean,
    required:true
  }

});

const Admin = mongoose.model("Admin",adminSchema);

// export the Schema use for routes
module.exports = Admin;