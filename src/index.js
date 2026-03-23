import express from "express"

const app = express()

app.get("",(req,res)=>{
    console.log(req.params)
    res.json({name:"Thilak Vikram R"})
})

app.listen(3000,err=>{
    console.log("Executed Successfully With Code Success")
})