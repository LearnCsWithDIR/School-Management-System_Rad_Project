// import Admin from './models/Admin';

const router = require("express").Router();
let Admin = require("../../models/admin/signUp.js");
var bcrypt = require('bcryptjs');
const User = require("../../models/user/signUp.js");

router.route("/add").post(async (req, res) => {
    const adminemail = req.body.adminemail;
    const adminpassword = req.body.adminpassword;
    adminverified = false; 

    try {
        // Find the admin email already used or not
        const admin = await Admin.findOne({ adminemail });

 
        if (admin) {
            res.status(200).json({ message: 'Email is Already used' });
        }
        else {
            // Display an success message or redirect the admin to a sign-In page

            // Hash the password before saving it
            const adminhashedPassword = await bcrypt.hash(adminpassword, 12);

            // pass the values for using that SignUp models
            const newAdmin = new Admin({
                adminemail, adminpassword:adminhashedPassword,adminverified
            })

            newAdmin.save().then(() => {
                res.json("New Admin Added successful")
            }).catch((err) => {
                console.log(err)
            })
        }

    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;