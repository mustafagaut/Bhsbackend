const mongoose=require('mongoose');


const studentSchema=new mongoose.Schema({
    name:{
        type:String
    },
    surname:{
        type:String
    },
    mother_name:{
        type:String,
        
    },
    father_name:{
        type:String
    },
    father_its_id:{
        type:String
    },
    student_its_id:{
        type:String
    },
    father_occupation:{
        type:String,
    },
    sssim_id:{
        type:String,
    },
    mobile:{
        type:String,
    },
    whatsapp_no:{
        type:String,
    },
    aadhar_no:{
        type:String,
    },
    roll_no:{
        type:String
        
    },
    class:{
        type:String,
    },
    section:{
        type:String,
    },
    scholar_no:{
        type:String
    },
    date_of_birth:{
        type:String,
        required:[true,"Please enter  Student Scholar No"],
    },
    father_monthly_income:{
        type:String
    },
    class_teacher_name:{
        type:String,
    },
    dini_teacher_name:{
      type:String,
    },
    bank_account_details:{
        type:String
    },
    house:{
        type:String,
        required:[true,"Please enter  Student House"],
    },
    image:{
        type:String,
    },

    email:{
        type:String
    },
    address:{
        type:String,
    },
    password:{
        type:String,

    },
    family_id:{
        type:String,
    },
    role:
    {
        type:String,
        default:"student"
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    
});

module.exports=mongoose.model("Students",studentSchema);