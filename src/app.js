const express=require('express')

const app=express();



app.use("/login",(req,res)=>{
    res.send("Please Login to Continue..")
})

app.use("/courses",(req,res)=>{
    res.send("Enroll in our courses.")
})
app.use("/",(req,res)=>{
    res.send("Home")
})
//Try to write "/" this at the end else it server will listen to this always


app.listen(7777,()=>{
    console.log(`app is listening on port 7777...`)
})
