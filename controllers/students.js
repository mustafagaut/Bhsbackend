const Students= require("../models/students");

const addStudent = async(req,res,next)=>{
    try{
        let data =req.body;
        console.log(data);
        req.body.image="";
        let student= await Students.create(req.body);
        if(student){
            res.status(200).json({
                success:true,
                message:"student Added Successfully"
            })
        }
    }catch(err){
        console.log(err)
        res.status(200).json({
            success:true,
            message:err.message
        });
    }
    
}

const getAllstudent= async(req,res,next)=>{
    try{
        req.body.image="";
        let students= await Students.find().select('name surname class roll_no class section');
        console.log(students);
        if(students){
            res.status(200).json({
                success:true,
                students
            })
        }
    }catch(err){
        console.log(err)
        res.status(200).json({
            success:false,
            message:err.message
        });
    }
};

const getStudentByID=async(req,res,next)=>{
    try {
        console.log(req.params.id,"id==========>");
        let id = req.params.id;
        if(id){
            let student = await Students.find({_id:id});
            if(student.length){
                res.status(200).json({
                    success:true,
                    student:student[0],
                });   
            }
            else{
                res.status(200).json({
                    success:false,
                    message:"Student not found with this ID" 
                });
            }
        }else{
            res.status(200).json({
                success:false,
                message:"Student id is missing"
            });  
        }
    } catch (error) {
        console.log("error",error);
        res.status(200).json({
            success:false,
            message:error.message
        })
    }
}

const editStudent = async(req,res,next)=>{
    try {
        console.log(req.params.id,"id==========>");
        let id = req.params.id;
        if(id){
            let student = await Students.find({_id:id});
            if(student){
                req.body.image="";
                let update = await Students.findByIdAndUpdate(id,req.body);
                if(update){
                    res.status(200).json({
                        success:true,
                        message:"Student updated" 
                    }); 
                }
            }
            else{
                res.status(200).json({
                    success:false,
                    message:"Student not found with this ID" 
                });
            }
        }else{
            res.status(200).json({
                success:false,
                message:"Student id is missing"
            });  
        }
    } catch (error) {
        console.log("error",error);
        res.status(200).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    addStudent,
    getAllstudent,
    getStudentByID,
    editStudent
}

