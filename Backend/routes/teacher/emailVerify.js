const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const crypto = require('crypto');
let Teacher = require("../../models/Teacher/signUp.js");
// const nodemailer = require('nodemailer');

// Verification route file
router.get('/verify', async (req, res) => {
  const { token } = req.query;

  try {
    // Find the user with the matching verification token
    const teacher = await Teacher.findOne({ "authentication.verificationToken": token });

    if (teacher) {
      // Update the user's verification status
      teacher.authentication.verified = true;
      teacher.authentication.verificationToken = undefined;
      await teacher.save();
      res.status(200).json({ message: 'Email verified successfully' });
      return;
    } 
    
    else {
      res.status(400).json({ message: 'Invalid verification token' });
      return;
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// update teacher verify email Token

module.exports = router;
