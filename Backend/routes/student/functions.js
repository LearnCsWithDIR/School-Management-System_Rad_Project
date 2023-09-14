const router = require("express").Router();
let Student = require("../../models/student/signUp.js");
let Attends = require("../../models/student/attendence.js");
let Results = require("../../models/teacher/results.js");
var bcrypt = require("bcryptjs");

// get the all details for the frontend
router.route("/view").get((req, res) => {
  Student.find()
    .then((student) => {
      res.json(student);
    })
    .catch((error) => {
      console.log(error);
    });
});

// update the student details
router.route("/update").post(async (req, res) => {
  const {
    user_id,
    stu_name,
    email,
    NIC,
    DOB,
    address,
    city,
    department,
    gender,
    phone,
    parent_name,
    relationship,
  } = req.body;

  const updateStudent = {
    email: email,
    userDetails: {
      name: stu_name,
      gender: gender,
      DOB: DOB,
      city: city,
      address: address,
      department: department,
    },
    parentDetails: {
      name: parent_name,
      NIC: NIC,
      relationship: relationship,
      phone: phone,
    },
  };

  Student.updateOne(
    { _id: user_id }, // Use the student's stored data ID to identify the result
    { $set: updateStudent } // Use $set to update the specified fields
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

// student details deletion
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await Student.findByIdAndDelete(userId)
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

// find one user details fetch
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const user = await Student.findById(userId)
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

// student attendence data store or update
router.route("/add-attendence").post(async (req, res) => {
  const { stu_id, subjectName, AttendType, Attendence } = req.body;

  // console.log(stu_id, subjectName, subjectMark, assignmentMark);
  try {
    // write the quary for idenfitfy student result
    const query = {
      $and: [{ stu_id: stu_id }, { subjectName: subjectName }],
    };
    const attend = await Attends.findOne(query);

    if (attend) {
      const updatedDetails = {
        AttendType: AttendType,
        Attendence: Attendence,
      };

      // Update the marks
      Attends.updateOne(
        { _id: attend._id }, // Use the student's stored data ID to identify the result
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
      const newAttend = new Attends({
        stu_id: stu_id,
        subjectName: subjectName,
        AttendType: AttendType,
        Attendence: Attendence,
      });

      newAttend
        .save()
        .then(() => {
          res.json({ message: "Attendence Added successful..." });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
});


// view attendence 
// get the all details for the frontend
router.route("/view-attendence").get((req, res) => {
  Attends.find()
    .then((attendence) => {
      res.json(attendence);
    })
    .catch((error) => {
      console.log(error);
    });
});


router.route("/delete-attend/").delete(async (req, res) => {
  const { stu_id, subjectName } = req.body;

  // let stu_id = req.params.id;
  try {
    const query = {
      $and: [{ stu_id: stu_id }, { subjectName: subjectName }],
    };
    const deleteAttend = await Attends.findOne( query );

    if (deleteAttend) {
      await Attends.findByIdAndDelete(deleteAttend._id)
        .then(() => {
          res.status(200).send({ message: "Attendece Deleted" });
        })
        .catch((err) => {
          // console.log(err);
          res
            .status(500)
            .send({ message: "Error with delete user", error: err.message });
        });
    } else {
      res.status(200).send({ message: "Already Deleted" });
    }
  } catch (error) {
    console.log(error);
  }
});


// get the all details for the frontend
router.route("/view-results").get((req, res) => {
  Results.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

// update the student Password
router.route("/update-password").post(async (req, res) => {
  const { user_id, currentPassword, NewPassword } = req.body;

  const student = await Student.findOne({ _id: user_id });

  if (student) {
    const stu_passwordMatch = await bcrypt.compare(
      currentPassword,
      student.authentication.stu_password
    );
    if (stu_passwordMatch) {

      const stu_hashedPassword = await bcrypt.hash(NewPassword, 12);


      const updatePassword = {
        authentication: {
          stu_password: stu_hashedPassword,
        },
      };

      Student.updateOne(
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



// get student when subject vice
// router.route("/follow-by-subject").post(async (req, res) => {
//   const { subject } = req.body;

//   // console.log(subject,"\n\n\n")
//   try {

//     const studentsWithSubject = await Student.find([
//       {
//         "userDetails.subject": { $elemMatch: { $eq: subject } },
//       },
//     ]);

//     console.log(studentsWithSubject);
//     res.json(studentsWithSubject);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;
