const router = require("express").Router();
let Teacher = require("../../models/teacher/signUp.js");


// get the all details for the frontend
router.route("/view").get((req,res)=>{

    Teacher.find().then((teacher)=>{
        res.json(teacher);
    }).catch((error)=>{
        console.log(error);
    });

});

// update the employee details 
router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const {name,age,gender} = req.body;
    const updateTeacher = {

        name,
        age,
        gender
    }
    const update = await Teacher.findByIdAndUpdate(userId,updateTeacher).then(()=>{
        res.status(200).send({status : "User Updated"});
    }).catch((erro)=>{
        console.log(erro);
        res.status(500).send({staus:"Erro With Updating Try Again",error:erro.message});
    });
});



// employee details deletion
router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;
    await Teacher.findByIdAndDelete(userId).then(()=>{

        res.status(200).send({status:"User Deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with delete user",error:err.message});
    });

});
// find one employee details fetch
router.route("/get/:id").get(async (req,res)=>{

    let userId = req.params.id;
    const user = await Teacher.findById(userId).then(()=>{

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
