// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  teacherDetails: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    NIC: {
      type: String,
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
    phoneNo: {
        type: String,
        required: true,
    },
    department: {
      type: String,
      required: true,
    },
    subject: {
        type: String,
        required: true,
    }

  },
  authentication: {
    teacher_password: {
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

const Teacher = mongoose.model("Teacher", teacherSchema);

// export the Schema use for routes
module.exports = Teacher;