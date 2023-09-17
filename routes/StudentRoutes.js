const express= require("express");
const router=express.Router();
const student= require("../controllers/students")


router.route("/").get(student.getAllstudent);
router.route("/addstudent").post(student.addStudent);
router.route("/:id").get(student.getStudentByID);
router.route("/editstudent/:id").post(student.editStudent)


module.exports=router;