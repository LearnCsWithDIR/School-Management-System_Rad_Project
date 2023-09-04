const router = require("express").Router();
let Employee = require("../../models/employee/signUp.js");


// get the all details for the frontend
router.route("/view").get((req,res)=>{

    Employee.find().then((employee)=>{
        res.json(employee);
    }).catch((error)=>{
        console.log(error);
    });

});

// update the employee details 
router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {name,age,gender} = req.body;
    const updateStudent = {

        name,
        age,
        gender
    }
    const update = await Employee.findByIdAndUpdate(userId,updateStudent).then(()=>{
        res.status(200).send({status : "User Updated"});
    }).catch((erro)=>{
        console.log(err);
        res.status(500).send({staus:"Erro With Updating Try Again",error:err.message});
    });
});



// employee details deletion
router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;
    await Employee.findByIdAndDelete(userId).then(()=>{

        res.status(200).send({status:"User Deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with delete user",error:err.message});
    });

});
// find one employee details fetch
router.route("/get/:id").get(async (req,res)=>{

    let userId = req.params.id;
    const user = await Employee.findById(userId).then(()=>{

        if (res.statusCode==200) {
            console.log("Success");
            
        }
        else{
            console.log("Unsuccess");

        }
       
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with fetch user",error : err.message});
    });


})

module.exports=router;
