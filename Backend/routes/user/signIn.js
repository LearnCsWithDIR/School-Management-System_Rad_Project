const router = require("express").Router();
let Student = require("../../models/student/signUp.js");
var bcrypt = require('bcryptjs');
const Employee = require("../../models/employee/signUp.js");
const Teacher = require("../../models/teacher/signUp.js");


router.route('/').post(async (req, res) => {
  const { email, userpassword } = req.body;

  try {

    // Find the email
    const student = await Student.findOne({ email });
    const employee = await Employee.findOne({ email });
    const teacher = await Teacher.findOne({ email });


    if (employee) {
      if (employee.authentication.verified == true) {

        const emp_passwordMatch = await bcrypt.compare(userpassword, employee.authentication.emp_password);
        const type = employee.empDetails.emp_type
        responseResult(emp_passwordMatch, type);
      }
      else {
        res.status(200).json({ sucess: false, message: 'Please Verifed your Email' });
        return;
      }
    }
    else if (student) {

      if (student.authentication.verified == true) {
        const stu_passwordMatch = await bcrypt.compare(userpassword, student.authentication.stu_password);
        const type = "student";
        responseResult(stu_passwordMatch, type);

      }
      else {
        res.status(200).json({ sucess: false, message: 'Please Verifed your Email' });
        return;

      }
    }
    else if (teacher) {

      if (teacher.authentication.verified == true) {
        const tea_passwordMatch = await bcrypt.compare(userpassword, student.authentication.stu_password);
        const type = "teacher";
        responseResult(tea_passwordMatch, type);

      }
      else {
        res.status(200).json({ sucess: false, message: 'Please Verifed your Email' });
        return;

      }
    }
    else {
      res.status(200).json({ sucess: false, message: 'Invalid Email' });
      return;
    }

    function responseResult(matchPassword, type) {
      // password checker
      if (matchPassword) {
        res.status(200).json({ sucess: true, message: "Sign-in successful", type: type });
        return;
      }
      else {
        res.status(200).json({ sucess: false, message: 'Invalid Email or Password' });
        return;
      }
    }



  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router;