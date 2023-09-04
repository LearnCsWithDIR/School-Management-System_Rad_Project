// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

  email: {
    type: String,
    required: true,
  },
  empDetails: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    NIC: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    emp_type: {
      type: String,
      required: true,
    }
  },
  authentication: {
    emp_password: {
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

const Employee = mongoose.model("Employee", employeeSchema);

// export the Schema use for routes
module.exports = Employee;