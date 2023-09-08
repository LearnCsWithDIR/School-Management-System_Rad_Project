const router = require("express").Router();
let Teacher = require("../../models/teacher/signUp.js");
let Results = require("../../models/teacher/results.js");

// get the all details for the frontend
router.route("/view").get((req, res) => {
  Teacher.find()
    .then((teacher) => {
      res.json(teacher);
    })
    .catch((error) => {
      console.log(error);
    });
});

// update the employee details
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, age, gender } = req.body;
  const updateTeacher = {
    name,
    age,
    gender,
  };
  const update = await Teacher.findByIdAndUpdate(userId, updateTeacher)
    .then(() => {
      res.status(200).send({ status: "User Updated" });
    })
    .catch((erro) => {
      console.log(erro);
      res
        .status(500)
        .send({ staus: "Erro With Updating Try Again", error: erro.message });
    });
});

// employee details deletion
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await Teacher.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});
// find one employee details fetch
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Teacher.findById(userId)
    .then(() => {
      if (res.statusCode == 200) {
        console.log("Success");
      } else {
        console.log("Unsuccess");
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with fetch user", error: err.message });
    });
});

// student data store or update
router.route("/add-result").post(async (req, res) => {
  const { stu_id, subjectName, subjectMark, assignmentMark } = req.body;

  try {
    // write the quary for idenfitfy student result
    const query = {
      $and: [{ stu_id: stu_id }, { subjectName: subjectName }],
    };
    const AveResult = await Results.findOne(query);

    if (AveResult) {
      const updatedDetails = {
        resultDetails: {
          subjectMark: subjectMark,
          assignmentMark: assignmentMark,
        },
      };

      // Update the marks
      Results.updateOne(
        { _id: AveResult._id }, // Use the student's stored data ID to identify the result
        { $set: updatedDetails } // Use $set to update the specified fields
      )
        .then((change) => {
          if (change.modifiedCount) {
            res.json({ message: "Result Updated successful..." });
          } else {
            res.json({ message: "Result is Already Updated..." });
          }
          console.log(count.modifiedCount);
        })
        .catch((err) => {
          console.error("Error updating document");
        });
    } else {
      const newResults = new Results({
        stu_id: stu_id,
        subjectName: subjectName,
        resultDetails: {
          subjectMark: subjectMark,
          assignmentMark: assignmentMark,
        },
      });

      newResults
        .save()
        .then(() => {
          res.json({ message: "New result Added successful..." });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
