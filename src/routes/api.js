import { Router } from "express";
import WarehouseStockModelfindMany from "../database/models/WarehouseStock/methods/findMany.js";
import { Parser } from "json2csv";

const ApiRouter = Router()
export default ApiRouter.get("/getCurrentInventoryData",(req,res)=>{
    WarehouseStockModelfindMany().then(content=>{
        console.log(Object.keys(content))
        const data2 = content.map(d=>d.dataValues)
        const parser = new Parser()
        res.setHeader("Content-Type", "text/csv")
        res.setHeader("Content-Disposition", "attachment; filename=users.csv")
        res.send(parser(data2))
    })
})