const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const crypto = require('crypto');
let User = require("../../models/user/signUp.js");
// const nodemailer = require('nodemailer');

// Verification route file
router.get('/verify', async (req, res) => {
  const { token } = req.query;

  try {
    // Find the user with the matching verification token
    const user = await User.findOne({ verificationToken: token });

    if (user) {
      // Update the user's verification status
      user.userverified = true;
      user.verificationToken = undefined;
      await user.save();
      res.status(200).json({ message: 'Email verified successfully' });
      
    } else {
      res.status(400).json({ message: 'Invalid verification token' });
      return;
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// update user verify email Token

module.exports = router;
