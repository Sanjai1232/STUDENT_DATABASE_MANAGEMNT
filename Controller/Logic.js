const { model } = require('mongoose');
const Model=require('../Model/Model');
const jwt=require('jsonwebtoken');


//login for Students
exports.stulogin=async(req,res,next)=>{     
     const avail=await Model.findOne({Rollno:req.body.Rollno,role:"student"});
     console.log(req.body.rollno, req.body.role);
     
     if(!avail){
        console.log("user not found");
        return res.status(404).json({
            message:"user not found",
            st:false
        })
     }
      if(avail.password==req.body.password){ 
   //jwt token generation here

      const payload={
        Rollno:avail.Rollno,
        role:avail.role
      }
      const token=jwt.sign(payload,"0000",{expiresIn:'1h'})
      console.log("user found");
          return res.json({
              message:"login success",
            avail,
            token,
              st:true
          })      
     }else{
        return res.status(404).json({
            message:"password incorrect",
          
          })}
     }

     //login for Staff
     exports.adminlogin=async(req,res,next)=>{     
    const avail = await Model.findOne({ name: req.body.name ,department: req.body.department,role:"admin"});  
    console.log(req.body.department, req.body.name);   
           if (!avail) {
            console.log("user not found");
            return res.status(404).json({
            message:"admin not found",
            st:false
        })}
        if(avail.password==req.body.password){
              const payload={
                name:avail.name,
                role:avail.role,
                department:avail.department
              }
              const token=jwt.sign(payload,"0000",{expiresIn:'1h'})
             // add jwt token generation here
             console.log("user found");
           return res.json({
            avail,
            token,
            message:"login success",
            st:true
            })
  
        }else{
            return res.status(404).json({
                message:"password incorrect",
                st:false
            })
        }
     }


//for creating data
exports.Create=async(req,res,next)=>{
     //const namee="joseph";// change this to req.body
     try{
    const avail= await Model.findOne({Rollno:req.body.Rollno}); // use rollnumber here
    if(avail){
      return res.status(404).json({
        message:"id already exist",
        sts:false
      })    
        // return console.log("error") 
    }
      const create = await Model.create(req.body); //req.body
        res.json({
            message:"success",
            sts:true,
            create
        })
    }catch(err){
        console.log(err);
    }
}

//for updating data
exports.update=async (req,res,next)=>{
     try{
      console.log(req.body.Rollno);
      
         const avail=await Model.findOne({Rollno:req.body.Rollno})
         if(avail){                                   //which rollno to update  ||| what content to update
            const update=await Model.findOneAndUpdate({Rollno:req.body.Rollno}, {$set:req.body})//filtering based on rollno so we can upadte easily
           console.log(update);
            return res.json({
                message:"Succesfully data updated",
                sts:true
            })
         }
         res.status(404).json({
            message:"id not found"
         })

     }catch(err){
    console.log(err);
    
     }
}


// //for viewing all data
exports.Alldata=async(req,res,next)=>{
      if(!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: "Access denied",sts:false });
    }
const data = await Model.find({
  department: { $in: ["bca", "BCA"] },
  role: { $in: ["student", "STUDENT"] }
}); //filtering based on department //HERE WE SHOULD USE STAFF DEAPRTMRNT "eg:req.department" 
  res.json({
    message:"all data fetched",
    data:data
  })
}


//deleting student API
exports.deletestu=async(req,res,next)=>{
  
    if(!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: "Access denied" });
    }

    const Rollno="259";
    try{
        const available= await Model.findOne({Rollno:Rollno});
      if (available) {
        const dlt=await Model.findOneAndDelete({Rollno:Rollno});
        res.json({
            message:"data deleted successfully",
            data:dlt
        })   
      }
    }catch(err){
        console.log(err);
    }
}

//creating a api for Student
exports.Myprofile=async(req,res,next)=>{
    const Rollno=req.user.Rollno//CHANGE THIS TO REQ.BODY.ROLLNO
    const user=await Model.findOne({Rollno:Rollno})
    try{
    if(user){
      return res.json({
        status:true,
        msg:user.name,
        user
       })       
    }
    return res.status(404).json({
        message:"user not found",
        status:false
    })
}catch(err){
 console.log(err)
}
}


//api for finding  student for update based on the rollnno
exports.getsingle=async(req,res,next)=>{
    try{
     if(!req.user || req.user.role == 'student') {
        return res.status(403).json({ message: "Access denied" });
    }
      const rollno=req.query.Rollno;  
      console.log(rollno);
      const user=await Model.findOne({Rollno:rollno});
      if(user){
        return res.json({
          sts:true,
          message:"user found",
          user
        })
      }
    return  res.status(404).json({
        message:"user not found"
      })
    }catch(err){  
      console.log(err);
       return res.status(500).json({
        message:"server error"
       })    
    }

}