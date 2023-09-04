const router = require("express").Router();
var bcrypt = require('bcryptjs');
const crypto = require('crypto');
const Teacher = require("../../models/teacher/signUp.js");
const Email = require('../emailVerifyProcess.js'); 


router.route('/add').post(async (req, res) => {
  const { teacher_name, email, NIC, address, city, department, gender, subject, phone } = req.body;
  const verified = false;

  try {
    // Find the Student email already used or not
    const teacher = await Teacher.findOne({ email });

    if (teacher) {
      res.status(200).json({ message: 'Email is Already used' });
      return;
    }
    else {
      // Display an success message or redirect the user to a sign-In page


      // Hash the password before saving it
      const teacher_hashedPassword = await bcrypt.hash(NIC, 12);

      // Generate the current date and time
      const signUpDate = new Date();

      // Generate a unique verification token for Students
      const verificationToken = crypto.randomBytes(20).toString('hex');

      // Create the verification URL
      const verificationURL = process.env.BASE_URL + 'user/verify?token=' + verificationToken;

      const newTeacher = new Teacher({
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

        authentication: {
          teacher_password: teacher_hashedPassword,
          verified: verified,
          verificationToken: verificationToken,
          signUpDate: signUpDate

        }

      });

      newTeacher.save().then(() => {
        res.json( {message : "New Teacher Added successful..."})
      }).catch((err) => {
        console.log(err)
      });

      // email verifiy for pass the data
      Email.sentEmail(email,verificationURL)

    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router; 