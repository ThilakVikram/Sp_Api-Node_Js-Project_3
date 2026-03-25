import express from "express"
import Warehouse_Stock_findMany from "../database/models/WarehouseStock/methods/findMany.js"
import { Parser } from "json2csv"
import ApiRouter from "./api.js"

const app = express()

// app.get("/api",(req,res)=>{
//     Warehouse_Stock_findMany().then(content=>{
//         const data = content.map(d=>d.dataValues)
//         console.log(Object.keys(data))
//         const parser = new Parser()
//         content = parser.parse(data)
//         res.setHeader("Content-Type", "text/csv")
//         res.setHeader("Content-Disposition", "attachment; filename=users.csv")
//         res.send(content)
//     })
// })

app.use("/api",ApiRouter)

app.get("",(req,res)=>{
    console.log("Received a Request")
    res.send("hi")
})

app.listen(3000,"0.0.0.0",err=>{
    console.log("Listening on Port "+3000)
})