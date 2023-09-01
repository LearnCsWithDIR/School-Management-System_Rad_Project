const router = require("express").Router();
const { model } = require("mongoose");
let Student = require("../../models/student/signUp.js");
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: Number(process.env.EMAIL_PORT),
    secure: Boolean(process.env.SECURE),
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

router.route('/').put(async (req, res) => {
    const { useremail } = req.body;

    try {
        // Find the user email already used or not
        const user = await Student.findOne({ useremail });

        if (user) {
            // user email valid and check token include or not
            if (user.authentication.verificationToken == undefined) {
                res.status(200).json({ message: 'Email is Already verified' });
                return;
            } else {
                if (user.authentication.verified == false) {
                    // Display an success message or redirect the user to a sign-In page

                    // Generate a unique verification token for users
                    const updateVerificationToken = crypto.randomBytes(20).toString('hex');

                    // Create the verification URL
                    const verificationURL = process.env.BASE_URL + 'user/verify?token=' + updateVerificationToken;

                    user.authentication.verificationToken = updateVerificationToken;
                    // 94ba1b8adf70ba33efe5c5931f3bc4cfe8e9167b
                    // d5c78794877636f7bb2a370bd903ea29f43ff8de
                    user.save().then(() => {

                        res.status(200).send({ status: "New verify Email received.please check your Email" })
                    }).catch((err) => {
                        console.log(err)
                        res.status(500).json({ message: 'Internal server error' });

                    });

                    // Compose the email message
                    const mailOptions = {
                        from: process.env.USER,
                        to: useremail,
                        subject: 'SMS Email Confirmation ',
                        // text: 'Please click the following link to verify your account: '+ verificationURL,

                        html: '<div style="background-color: #e7e7e7; padding: 10px 10px 50px 10px; margin: 5px; border-top-left-radius: 30px; border-bottom-right-radius: 30px;">' +
                            '<p style="color:white; text-align: center; font-size: 42px; padding: 30px 0 0 0px; margin: 0px;">Welcome To</p>' +
                            '<p style="color:black; text-align: center; font-size: 36px; padding: 0px; margin: 0px;">Amoral !</p><br>' +
                            '<p style="color:blue; text-align: center; font-size: 22px; padding: 0px; margin: 0px;">Unleash your fashion confidence!</p><br>' +
                            '<p style="font-size: 18px; text-align: center;padding: 0px 20px;">Please take a moment to confirm your email address to complete your Amoral profile.'
                            + '<br>Only confirmed your email addresses will receive emails from Amoral.</p><br>' +
                            '<div style = "text-align: center;"><button style = "background-color: black;border: none; border-radius: 18px; padding: 15px 25px;font-size: 16px;"'
                            + `><a style="text-decoration: none; color: white; padding: 15px 32px;  border-radius: 18px;" href= ${verificationURL}>CONFIRM EMAIL</button></div></div><br><br>`
                    };

                    // Send the verification email
                    await transporter.sendMail(mailOptions);
                }
            }

        }
        else {
            res.status(401).json({ message: 'Email is Invalid' });
            return;

        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Internal server error' });

    }

});

module.exports = router;