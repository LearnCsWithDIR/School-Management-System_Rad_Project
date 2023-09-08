// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  stu_id: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  resultDetails: {
    subjectMark: {
      type: String,
      required: true,
    },
    assignmentMark: {
      type: String,
      required: true,
    },
  },
});

const Results = mongoose.model("Result", resultsSchema);

// export the Schema use for routes
module.exports = Results;
