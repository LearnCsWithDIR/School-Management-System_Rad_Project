const router = require("express").Router();
var bcrypt = require("bcryptjs");
const crypto = require("crypto");
const Student = require("../../models/student/signUp.js");
const Email = require("../emailVerifyProcess.js");

router.route("/add").post(async (req, res) => {
  const {
    stu_name,
    email,
    DOB,
    address,
    city,
    department,
    gender,
    parent_name,
    relationship,
    NIC,
    phone,
  } = req.body;
  const verified = false;
  let subjectArray = [];
  try {
    // Find the Student email already used or not
    const user = await Student.findOne({ email });

    if (user) {
      res.status(200).json({ message: "Email is Already used" });
      return;
    } else {
      // Display an success message or redirect the user to a sign-In page

      const namePart = stu_name.split(" ");

      const firstname = namePart[0].toLowerCase();

      const defaultpassword = firstname + "123";

      // Hash the password before saving it
      const stu_hashedPassword = await bcrypt.hash(defaultpassword, 12);
      const parent_hashedPassword = await bcrypt.hash(NIC, 12);

      // Generate the current date and time
      const signUpDate = new Date();

      // Generate a unique verification token for Students
      const verificationToken = crypto.randomBytes(20).toString("hex");

      // Create the verification URL
      const verificationURL =
        process.env.BASE_URL + "user/verify?token=" + verificationToken;

      if (department == "Computer Science") {
        subjectArray = [
          "Software Engineering",
          "Programming language",
          "Combined Mathematics",
        ];
      } else if (department == "Mathematics") {
        subjectArray = [ "Combined Mathematics", "Pure Mathematics", "Physics"];
      } else if (department == "Technology") {
        subjectArray = [
          "Engineering-Technology",
          "Bio-Technology",
          "Architecture",
        ];
      } else if (department == "Science") {
        subjectArray = ["Astronomy", "Chemistry", "Physics"];
      }
      console.log(subjectArray);

      const newStudent = new Student({
        email: email,
        userDetails: {
          name: stu_name,
          gender: gender,
          DOB: DOB,
          city: city,
          address: address,
          department: department,
          subject: subjectArray,
        },
        parentDetails: {
          name: parent_name,
          NIC: NIC,
          relationship: relationship,
          phone: phone,
        },
        authentication: {
          stu_password: stu_hashedPassword,
          parent_password: parent_hashedPassword,
          verified: verified,
          verificationToken: verificationToken,
          signUpDate: signUpDate,
        },
      });

      newStudent
        .save()
        .then(() => {
          res.json({ message: "New Student Added successful..." });
        })
        .catch((err) => {
          console.log(err);
        });

      // email verifiy for pass the data
      Email.sentEmail(email, verificationURL);
    }
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
