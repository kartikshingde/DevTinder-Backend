const express=require('express')

const app=express();


app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
    res.send({firstName:"Kartik",lastName:"Shingde"})
})
// /user/:userId/:name/:password =>dynamic routing...
// for query like ?userid=101  => requst.query
// for params  => request.params





// // /ac, /abc
// // app.get(/^\/ab?c$/,(req,res)=>{
// //     res.send({firstName:"Kartik",lastName:"Shingde"})
// // })
// app.get(/^\/a(bc)?d$/,(req,res)=>{
//     res.send({firstName:"Kartik",lastName:"Shingde"})
// })
// // ?=optional

// app.get(/.*fly$/,(req,res)=>{
//     res.send({firstName:"Kartik",lastName:"Shingde"})
// })


app.listen(7777,()=>{
    console.log(`app is listening on port 7777...`)
})
