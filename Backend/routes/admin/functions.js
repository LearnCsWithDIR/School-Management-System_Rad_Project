const router = require("express").Router();
let Employee = require("../../models/employee/signUp.js");
var bcrypt = require("bcryptjs");

// get the all details for the frontend
router.route("/view").get((req, res) => {
  Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((error) => {
      console.log(error);
    });
});

// update the student details
router.route("/update").post(async (req, res) => {
  const {
    user_id,
    emp_name,
    email,
    NIC,
    address,
    city,
    gender,
    phone,
    emp_type,
  } = req.body;

  const updateEmployee = {
    email: email,
    empDetails: {
      name: emp_name,
      gender: gender,
      city: city,
      address: address,
      NIC: NIC,
      phone: phone,
      emp_type: emp_type,
    },
  };

  Employee.updateOne(
    { _id: user_id }, // Use the student's stored data ID to identify the result
    { $set: updateEmployee } // Use $set to update the specified fields
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

// employee details deletion
router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await Employee.findByIdAndDelete(userId)
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
  const user = await Employee.findById(userId)
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

// update the teacher Password
router.route("/update-password").post(async (req, res) => {
  const { user_id, currentPassword, NewPassword } = req.body;

  const employee = await Employee.findOne({ _id: user_id });

  if (employee) {
    const employee_passwordMatch = await bcrypt.compare(
      currentPassword,
      employee.authentication.emp_password
    );
    if (employee_passwordMatch) {
      const employee_hashedPassword = await bcrypt.hash(NewPassword, 12);

      const updatePassword = {
        authentication: {
          emp_password: employee_hashedPassword,
        },
      };

      Employee.updateOne({ _id: user_id }, { $set: updatePassword })
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

module.exports = router;
