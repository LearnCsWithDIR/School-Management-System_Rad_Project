const router = require("express").Router();
let Employee = require("../../models/employee/signUp.js");
var bcrypt = require('bcryptjs');
const crypto = require('crypto');
const Email = require('../emailVerifyProcess.js')

router.route("/add").post(async (req, res) => {
    const { emp_name, email, address, city, NIC, phone, gender, emp_type } = req.body;
    var verified = false;

    try {
        // Find the employee email already used or not
        const employee = await Employee.findOne({ email });


        if (employee) {
            res.status(200).json({ message: 'Email is Already used' });
        }
        else {
            // Display an success message or redirect the employee to a sign-In page

            // Hash the password before saving it
            const emp_hashedPassword = await bcrypt.hash(NIC, 12);

            // Generate the current date and time
            const signUpDate = new Date();

            // Generate a unique verification token for Students
            const verificationToken = crypto.randomBytes(20).toString('hex');

            // Create the verification URL
            const verificationURL = process.env.BASE_URL + 'user/verify?token=' + verificationToken;


            // pass the values for using that SignUp models
            const newEmployee = new Employee({
                email: email,
                empDetails: {
                    name: emp_name,
                    address: address,
                    city: city,
                    NIC: NIC,
                    phone: phone,
                    gender: gender,
                    emp_type: emp_type
                },
                authentication: {
                    emp_password: emp_hashedPassword,
                    verified: verified,
                    verificationToken: verificationToken,
                    signUpDate: signUpDate

                }
            });

            newEmployee.save().then(() => {
                res.json("New Employee Added successful")
            }).catch((err) => {
                console.log(err)
            });

            // email verifiy for pass the data
            Email.sentEmail(email, verificationURL)
        }

    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;