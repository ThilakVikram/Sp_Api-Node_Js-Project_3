import { DataTypes } from "sequelize"
export const WAREHOUSE_STRUCTURE = {
    entry_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    updated_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },

    asin: {
        type: DataTypes.STRING(20)
    },

    sku: {
        type: DataTypes.STRING(100)
    },

    fnsku: {
        type: DataTypes.STRING(100)
    },

    item_name: {
        type: DataTypes.STRING(500)
    },

    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    inbound_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    outbound_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    reviewing_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    damaged_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    overall_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    warehouse: {
        type: DataTypes.STRING(100)
    },

    warehouse_id: {
        type: DataTypes.STRING(150),
        allowNull: true
    },

    unstructured_name: {
        type: DataTypes.STRING(150),
        allowNull: true
    }
}