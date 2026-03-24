import Define from "../Define.js";

export default async function Insert(datas = [Define.modelTemplate()]){
    return await Define.table.bulkCreate(datas)
}