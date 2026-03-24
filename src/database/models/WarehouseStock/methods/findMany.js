import { Op } from "sequelize";
import Define from "../Define.js";

// console.log(Define)
export default async function findMany(){
    const last_updated = await Define.table.max("updated_date")
    return await Define.table.findAll({
        where:{
            updated_date: {
                [Op.eq] : last_updated
            }
        }
    })
}