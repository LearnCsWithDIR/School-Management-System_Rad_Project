const router = require("express").Router();
let Student = require("../../models/student/signUp.js");

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

router.route("/view-by-subject").get( async (req,res)=>{
  try {
    const studentsWithSubject = await Student.aggregate([
      {
        $match: {
          'userDetails.subject': 'Combined Mathematics',
        },
      },
    ]);
console.log(studentsWithSubject)
    res.json(studentsWithSubject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

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

module.exports = router;
