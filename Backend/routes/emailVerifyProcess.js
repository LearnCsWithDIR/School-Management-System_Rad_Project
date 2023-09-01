const nodemailer = require('nodemailer');
const router = require("express").Router();

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


async function sentEmail(email,verificationURL)  {
    
     // Compose the email message
     const mailOptions = {
        from: process.env.USER,
        to: email,
        subject: 'SMS Email Confirmation ',
        // text: 'Please click the following link to verify your account: '+ verificationURL,

        html: '<div style="background-color: #e7e7e7; padding: 10px 10px 50px 10px; margin: 5px; border-top-left-radius: 30px; border-bottom-right-radius: 30px;">' +
          '<p style="color:white; text-align: center; font-size: 42px; padding: 30px 0 0 0px; margin: 0px;">Welcome To</p>' +
          '<p style="color:black; text-align: center; font-size: 36px; padding: 0px; margin: 0px;">Sipsala!</p><br>' +
          '<p style="color:blue; text-align: center; font-size: 22px; padding: 0px; margin: 0px;">Student Management System</p><br>' +
          '<p style="font-size: 18px; text-align: center;padding: 0px 20px;">Please take a moment to confirm your email address to complete your Sipsala profile.'
          + '<br>Only confirmed your email addresses will receive emails from Sipsala.</p><br>' +
          '<div style = "text-align: center;"><button style = "background-color: black;border: none; border-radius: 18px; padding: 15px 25px;font-size: 16px;"'
          + `><a style="text-decoration: none; color: white; padding: 15px 32px;  border-radius: 18px;" href= ${verificationURL}>CONFIRM EMAIL</button></div></div><br><br>`
      };

      // Send the verification email
      await transporter.sendMail(mailOptions);

}

module.exports = {sentEmail}