const router = require("express").Router();
let Admin = require("../../models/employee/signUp.js");
var bcrypt = require('bcryptjs');

router.route('/').post(async (req, res) => {

    const { adminemail, adminpassword } = req.body;
    try {

        // Hashing user entered the password before check it
        // const adminhashedPassword = await bcrypt.hash(adminpassword, 12);

        // find admin email
        const admin = await Admin.findOne({ adminemail });

        if (admin) {

            // check email verifed or not
            if (admin.adminverified == true) {
                // password checker
                const passwordMatch = await bcrypt.compare(adminpassword, admin.adminpassword);
                if (passwordMatch) {
                    res.status(200).json({ massage: "Sign-in successful" });
                }
                else {
                    res.status(401).json({ massage: "Invalid email or password" });
                }

            } else {
                res.status(401).json({ massage: "Please Verifed your Email" });
            }
        }
        else {
            res.status(401).json({ massage: "Invalid email or password" });

        }

    }
    catch (e) {
        console.error("Error signing in:", e);
        res.status(500).json({ massage: "Internal server error" });
    }
}
);



module.exports = router;
