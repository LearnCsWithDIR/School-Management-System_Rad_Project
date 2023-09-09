const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
// using express framework
const app = express();

// server connect port 
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// database connect for backend server
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo DB connection Successfull..");
});


// connect student signUp file
const userSignUpRouter = require("./routes/student/signUp.js");
app.use("/user/signUp", userSignUpRouter);

// connect admin signUp file
const adminSignUpRouter = require("./routes/admin/signUp.js");
app.use("/signUp", adminSignUpRouter);

// connect teacher signUp file
const techerSignUpRouter = require("./routes/teacher/signUp.js");
app.use("/teacher/signUp", techerSignUpRouter);

// connect user signIn file
const userSignInRouter = require("./routes/user/signIn.js");
app.use("/user/signIn", userSignInRouter);

// // connect admin signIn file
// const adminSignInRouter = require("./routes/admin/signIn.js");
// app.use("/signIn", adminSignInRouter);

// connect user email verification file
const userVerifyRouter = require("./routes/user/emailVerifiy.js");
app.use("/user", userVerifyRouter);

// connect user email verification token update file
const updateTokenRouter = require("./routes/user/tokenUpdate.js");
app.use("/t", updateTokenRouter);

const unverifieduser = require("./routes/user/tokenUpdate.js");
app.use("/ud", unverifieduser);


// student functions routing

// connect student functions
const studentViewRouter = require("./routes/student/functions.js");
app.use("/student/f", studentViewRouter);

// connect employee functions
const EmployeeViewRouter = require("./routes/admin/functions.js");
app.use("/af/f", EmployeeViewRouter);

// connect teacher functions
const TeacherViewRouter = require("./routes/teacher/functions.js");
app.use("/teacher/f", TeacherViewRouter);


app.listen(PORT, () => {
    console.log("Sever is up and running...");
});