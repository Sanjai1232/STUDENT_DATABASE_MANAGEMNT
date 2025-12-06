const { model } = require('mongoose');
const Model=require('../Model/Model');

exports.Sample=(req,res,next)=>{
res.json({
    message:"sampale api"
})
}


//for creating data
exports.Create=async(req,res,next)=>{
     const namee="sajai";// change this to req.body
     try{
    const avail= await Model.findOne({name:namee}); // use rollnumber here
    if(avail){
       res.status(404).json({
        message:"id already exist"
      })    
        // return console.log("error") 
    }
     const create = await Model.create({name:namee})
        res.json({
            message:"success",
        })
    }catch(err){
        console.log(err);
    }
}

//for updating data
exports.update=async (req,res,next)=>{
     const checking="Sanjai" //inga already intha rollno irrukanu check pannanum
     const obj={
        name:"siva"// inga new rollno kodukanum
     }
     try{
        console.log(checking);
         const avail=await Model.findOne({name:checking})
         if(avail){                                   //which rollno to update👇 ||| what content to update
            const update=await Model.findOneAndUpdate({name:checking},             {$set:obj})//filtering based on rollno so we can upadte easily
           console.log(update);
            return res.json({
                message:"Succesfully data updated"
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
  const data= await Model.find();
  console.log(data);
  res.json({
    message:"all data fetched",
    data:data
  })
}

