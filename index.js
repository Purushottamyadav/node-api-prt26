const express=require("express")
const mongoose=require("mongoose")
const app=express()
const data=require("./routes/student")
mongoose.connect('mongodb://localhost/Stident', { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})
app.use("/v1",data)
app.get("*",(req,res)=>{
    res.status(404).json(
        "Bad request"
    )
})

app.listen(3000,()=>{
    console.log(`server is running on "http://localhost:3000/v1"`)})