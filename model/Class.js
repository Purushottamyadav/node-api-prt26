const mongoose=require('mongoose')

// const studentClsSchema=new mongoose.Schema({
//     name:{type:String,required:true,},
//     classId:{type:Number,required:true,}
// })

const studentSchema=new mongoose.Schema({
    class:{
        type:String,required:true
    },
    studentsCount:{
        type:Number,required:true,
    }
},{timestamps:true})
const studentModel= new mongoose.model("Student",studentSchema)
module.exports=studentModel