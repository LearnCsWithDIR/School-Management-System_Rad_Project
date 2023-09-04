const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const crypto = require('crypto');
let Student = require("../../models/student/signUp.js");
const Employee = require('../../models/employee/signUp.js');
// const nodemailer = require('nodemailer');

// Verification route file
router.get('/verify', async (req, res) => {
  const { token } = req.query;

  try {
    // Find the user with the matching verification token
    const student = await Student.findOne({ "authentication.verificationToken": token });
    const employee = await Employee.findOne({ "authentication.verificationToken": token });

    if (student) {
      // Update the student's verification status
      student.authentication.verified = true;
      student.authentication.verificationToken = undefined;
      await student.save();
      res.status(200).json({ message: 'Email verified successfully' });
      return;
    } 
    
    else if (employee) {
      // Update the employee's verification status
      employee.authentication.verified = true;
      employee.authentication.verificationToken = undefined;
      await employee.save();
      res.status(200).json({ message: 'Email verified successfully' });  
      return;
      
    } 
    
    else {
      res.status(200).json({ message: 'Invalid verification token' });
      return;
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// update user verify email Token

module.exports = router;
