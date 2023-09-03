const router = require("express").Router();
var bcrypt = require('bcryptjs');
const crypto = require('crypto');
const Teacher = require("../../models/teacher/signUp.js");

router.get('/logout', (req, res) => {
    res.clearCookie('token'); 
    res.redirect('../routes/user/signIn');
});

module.exports = router;