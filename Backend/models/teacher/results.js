// want to mongobd connetion
const mongoose = require("mongoose");

// create a schema for users
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  resultDetails: {
    subjectName:{
        type: String,
        required: true,
    },
    subjectMarks: {
      type: String,
      required: true,
    },
    assignmentMarks: {
      type: String,
      required: true,
    },

  },
  

});

const Teacher = mongoose.model("Results", resultsSchema);

// export the Schema use for routes
module.exports = Results;