const express=require('express')

const app=express();


app.get("/user",(req,res)=>{
    res.send({firstName:"Kartik",lastName:"Shingde"})
})

app.post("/user",(req,res)=>{
    
    //data saved to database
    res.send("Data successfully saved to database!")
})

app.delete("/user",(req,res)=>{
    res.send("data deleted from database successfully from database!")
})


//this will match all the Http Api call to /test
app.use("/test",(req,res)=>{
    res.send("Hello from Server test")
})


app.listen(7777,()=>{
    console.log(`app is listening on port 7777...`)
})
