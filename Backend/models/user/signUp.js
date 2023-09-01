// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userDetails: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },

  },
  parentDetails: {
    name: {
      type: String,
      required: true,
    },
    NIC: {
      type: String,
      required: true,
    }, 
    relationship: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  authentication: {
    
    stu_password: {
      type: String,
      required: true,
    },
    parent_password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      required: true
    },
    verificationToken: {
      type: String,
      // required:true
    },
    signUpDate: {
      type: Date,
    },
    active: {
      type: Boolean
    }
  },

});

const User = mongoose.model("User", userSchema);

// export the Schema use for routes
module.exports = User;