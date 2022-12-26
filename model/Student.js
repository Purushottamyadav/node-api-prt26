const mongoose=require('mongoose')
const studentClsSchema=new mongoose.Schema({
    name:{type:String,required:true,},
    classId:{type:String,required:true,}
})
const studentClsModel= new mongoose.model("Class",studentClsSchema)
module.exports=studentClsModel