const router = require("express").Router();
let Student = require("../../models/student/signUp.js");
var bcrypt = require('bcryptjs');
const Employee = require("../../models/employee/signUp.js")
router.route('/').post(async (req, res) => {
  const { useremail, userpassword } = req.body;

  try {

    // Find the email
    const student = await Student.findOne({ useremail });
    const employee = await Employee.findOne({ useremail });

    if (student || employee) {

      if (student.authentication.verified == true) {
        // password checker
        const stu_passwordMatch = await bcrypt.compare(userpassword, student.authentication.stu_password);
        const emp_passwordMatch = await bcrypt.compare(userpassword, employee.authentication.emp_password);
        if (stu_passwordMatch) {
          res.status(200).json({ message: `${student.userDetails.name} Sign-in successful` });
          return;
        }
        else if(emp_passwordMatch){
          res.status(200).json({ message: `${employee.empDetails.name} Sign-in successful` , type: employee.emp_type });
          return;

        }
        else {
          res.status(401).json({ message: 'Invalid Email or Password' });
          return;
        }

      } else {
        res.status(401).json({ massage: "Please Verifed your Email" });
        return;
      }
    }
    else {
      res.status(401).json({ message: 'Invalid Email or Password' });
      // Display an error message or redirect the user to a sign-up page
      return;

    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router;