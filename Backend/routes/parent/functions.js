var bcrypt = require("bcryptjs");
let Student = require("../../models/student/signUp.js");
const router = require("express").Router();

// update the parent Password
router.route("/update-password").post(async (req, res) => {
  const { user_id, currentPassword, NewPassword } = req.body;

  console.log("parent password resetd");

  const parent = await Student.findOne({ _id: user_id });

  if (parent) {
    const parent_passwordMatch = await bcrypt.compare(
      currentPassword,
      parent.authentication.parent_password
    );
    if (parent_passwordMatch) {

      const parent_hashedPassword = await bcrypt.hash(NewPassword, 12);
      const verified = parent.authentication.verified;
      const stu_password = parent.authentication.stu_password;

      const updatePassword = {
        authentication: {
          stu_password:stu_password,
          parent_password: parent_hashedPassword,
          verified: verified,
        },
      };

      Student.updateOne({ _id: user_id }, { $set: updatePassword })
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
