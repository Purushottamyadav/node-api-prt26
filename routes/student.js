const router=require('express').Router()
const bodyParser=require("body-parser")
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
const stuClass= require("../model/Class")
const student=require("../model/Student")

router.post("/myClass",async(req,res)=>{
    try {
        const data=await stuClass.create(req.body)
        const id=data.id;
        res.status(200).json({
            id
    })
    } catch (err) {
        res.json({
            message:err.message
        })
    }
})

router.post("/myClass/:myClassId/students",async(req,res)=>{
    try {
        const data=await stuClass.find({_id:req.params.myClassId})
        if(data){
            const studentData=await student.create(req.body)
            res.json({
                studentData
            })
        }
        else{
            res.json(
                "not found"
            ) 
        }
        
    } catch (err) {
        res.json({
            message:err.message
        })
    }
})

router.get("/myClass",async(req,res)=>{
    try {
        const classes=await stuClass.find()
        res.json({
            classes
        })
    } catch (e) {
        res.json({
            message:e.message
        })
    }
})

router.get("/myClass/:myClassId",async(req,res)=>{
    try {
        const classes=await stuClass.findOne({_id:req.params.myClassId})
        res.json({
            classes
        })
    } catch (e) {
        res.json({
            error: "There is no class at that id"
        })
    }
})
router.get("/myClass/:myClassId/students",async(req,res)=>{
    try {
        const classes=await student.find({classId:req.params.myClassId})
        res.json({
            classes
        })
    } catch (e) {
        res.json({
            error: "There are no students at this class"
        })
    }
})
router.get("/myClass/:myClassId/students/:studentId",async(req,res)=>{
    try {
        const classes=await student.find({classId:req.params.myClassId})
        if(classes) {
            const Student=await student.findOne({_id:req.params.studentId})
            res.json({
                Student
            })
        }
        
    } catch (e) {
        res.json({
            error: "There is no student of that id"
        })
    }
})
router.put("/myClass/:myClassId/students/:studentId",async(req,res)=>{
    try {
        const classes=await student.find({classId:req.params.myClassId})
        if(classes) {
            const Student=await student.updateOne({_id:req.params.studentId},req.body)
            res.status(204).json({
            })
        }
        
    } catch (e) {
        res.json({
            error: "There is no student of that id"
        })
    }
})
router.delete("/myClass/:myClassId",async(req,res)=>{
    try {
        const classes=await stuClass.deleteOne({_id:req.params.myClassId})
        res.status(204).json({})
    } catch (e) {
        res.json({
            error: "There is no task at that id"
        })
    }
})

router.delete("/myClass/:myClassId/students/:studentId",async(req,res)=>{
    try {
        const classes=await student.find({classId:req.params.myClassId})
        if(classes) {
            const Student=await student.deleteOne({_id:req.params.studentId})
            res.status(204).json({
            })
        }
        
    } catch (e) {
        res.json({
            error: "There is no task at that id"
        })
    }
})
module.exports=router   