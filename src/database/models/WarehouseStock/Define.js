import { WarehouseStockModelDetail } from "../../../../main_config.js"
import Connections from "../../Connections.js"
import { WAREHOUSE_STRUCTURE } from "./Structure.js"

class Define {
    constructor() {
        this.connection = Connections
        this.sequelize = this.connection.sequelize
        this.table = this.sequelize.define(
            WarehouseStockModelDetail.tableName,
            { ...WAREHOUSE_STRUCTURE },
            { tableName: WarehouseStockModelDetail.tableName, timestamps: false }
        )
    }
    restartModel() {
        this.connection.restartConnection()
        this.sequelize = this.connection.sequelize
        this.table = this.sequelize.define(
            WarehouseStockModelDetail.tableName,
            { ...WAREHOUSE_STRUCTURE },
            { tableName: WarehouseStockModelDetail.tableName, timestamps: false }
        )
    }
    modelTemplate({
        updated_date,
        asin,
        sku,
        fnsku,
        item_name,
        quantity,
        inbound_quantity,
        outbound_quantity,
        reviewing_quantity,
        damaged_quantity,
        overall_quantity,
        warehouse,
        warehouse_id,
        unstructured_name
    }) {
        return {
            updated_date,
            asin,
            sku,
            fnsku,
            item_name,
            quantity,
            inbound_quantity,
            outbound_quantity,
            reviewing_quantity,
            damaged_quantity,
            overall_quantity,
            warehouse,
            warehouse_id,
            unstructured_name
        }
    }
}


export default new Define()