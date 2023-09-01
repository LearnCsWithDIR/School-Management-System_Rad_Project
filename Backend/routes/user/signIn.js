const router = require("express").Router();
let User = require("../../models/user/signUp.js");
var bcrypt = require('bcryptjs');

router.route('/').post(async (req, res) => {
  const { useremail, userpassword } = req.body;

  try {

    // Find the email
    const user = await User.findOne({ useremail });

    if (user) {

      if (user.userverified == true) {
        // password checker
        const passwordMatch = await bcrypt.compare(userpassword, user.userpassword);
        if (passwordMatch) {
          res.status(200).json({ message: 'Sign-in successful' });
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