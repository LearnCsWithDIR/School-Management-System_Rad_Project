// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const userSchema = new Schema({
  useremail: {
    type: String,
    required: true,
  },
  userpassword: {
    type: String,
    required: true,
  },
  userverified:{
    type:Boolean,
    required:true
  },
  verificationToken:{
    type:String,
    // required:true
  },
  signUpDate:{
    type:Date,
  }

});

const User = mongoose.model("User",userSchema);

// export the Schema use for routes
module.exports = User;