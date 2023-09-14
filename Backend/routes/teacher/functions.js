const router = require("express").Router();
let Teacher = require("../../models/teacher/signUp.js");
let Results = require("../../models/teacher/results.js");
var bcrypt = require("bcryptjs");

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

// update the teacher details
router.route("/update").post(async (req, res) => {
  const {
    user_id,
    teacher_name,
    email,
    NIC,
    address,
    city,
    department,
    gender,
    subject,
    phone,
  } = req.body;

  const updateTeacher = {
    email: email,
    teacherDetails: {
      name: teacher_name,
      gender: gender,
      NIC: NIC,
      city: city,
      address: address,
      phoneNo: phone,
      department: department,
      subject: subject,
    },
  };

  Teacher.updateOne(
    { _id: user_id }, // Use the student's stored data ID to identify the result
    { $set: updateTeacher } // Use $set to update the specified fields
  )
    .then((change) => {
      if (change.modifiedCount) {
        res.json({ message: "Updated successful..." });
      } else {
        res.json({ message: "Already Updated..." });
      }
      console.log(count.modifiedCount);
    })
    .catch((err) => {
      console.error("Error updating document");
    });
});

// teacher details deletion
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
// find one teacher details fetch
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

// student result data store or update
router.route("/add-result").post(async (req, res) => {
  const { stu_id, subjectName, subjectMark, assignmentMark } = req.body;

  // console.log(stu_id, subjectName, subjectMark, assignmentMark);
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
            res.json({ message: "Updated successful..." });
          } else {
            res.json({ message: "Already Updated..." });
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
          res.json({ message: "Result Added successful..." });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
});



// $2a$12$SEcDagApSc1MQ9BfdbZnbuEmYW0akuyhAC.G92hzEabKyvR6A4E3G
// $2a$12$1TUCQJWdgCeIO0mU41JnC.waKzjqKcKmDYEKGVeEY2aZnQ0eCTb6W

module.exports = router;

// update the teacher Password
router.route("/update-password").post(async (req, res) => {
  const { user_id, currentPassword, NewPassword } = req.body;

  const teacher = await Teacher.findOne({ _id: user_id });

  if (teacher) {
    const teacher_passwordMatch = await bcrypt.compare(
      currentPassword,
      teacher.authentication.teacher_password
    );
    if (teacher_passwordMatch) {

      const teacher_hashedPassword = await bcrypt.hash(NewPassword, 12);


      const updatePassword = {
        authentication: {
          teacher_password: teacher_hashedPassword,
        },
      };

      Teacher.updateOne(
        { _id: user_id }, 
        { $set: updatePassword } 
      )
        .then((change) => {
          if (change.modifiedCount) {
            res.json({ message: "Password Reset successful..." });
          }
          // console.log(count.modifiedCount);
        })
        .catch((err) => {
          console.error("Error updating document");
        });

      return;
    } else {
      res.json({ message: "Password is not match..." });
      return;
    }
  } else {
    res.json({ message: "User is not found..." });
    return;
  }
});
