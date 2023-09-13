// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const attendenceSchema = new Schema({
  stu_id: {
    type: String,
    required: true,
  },
  AttendType: {
    type: String,
    required: true,
  },
  Attendence: {
    type: Date,
    required: true,
  },
});

const Attends = mongoose.model("Attendence", attendenceSchema);

// export the Schema use for routes
module.exports = Attends;
