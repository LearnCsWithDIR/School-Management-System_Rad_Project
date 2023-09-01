const router = require("express").Router();
let User = require("../../models/user/signUp.js");


//show unverified users by email address
router.route("/").get(async(req,res)=>{

    try{
      //find the email
      const user=await User.findOne({useremail})
      const futureDate = new Date(user.signUpDate.getFullYear(), user.signUpDate.getMonth() + 1, user.signUpDate.getDate());
      const currentDate = new Date();
  
      if(user){
        if((user.userverified==false&&(futureDate > currentDate))){
          //show all unverified users and delete funtion for each user
          User.find().then(user,this.delete).catch((err) =>{
            console.log(err);
          })
  
  
        }
  
      }
    } catch(error){
      console.error("Error in finding unverified users:",error)
      res.status(500).json({ message: 'Internal server error' });
    }
  })
  
  
  
  //delete unverified users
  router.route("/delete/:email").delete(async(req,res)=>{
    let useremail=req.params.email;
    
    await User.findOneAndDelete(useremail).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err.messege);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
  })
  
  module.exports = router;