import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;
const Tanggal_rapor = db.define('tanggal_rapor', {
    id_tanggal: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    tanggal: {
        type: DataTypes.DATE, 
        allowNull: false, 
        validate: {
            notEmpty: true, 
            isDate: true, 
            isBefore: new Date().toISOString().split('T')[0], 
        },
    },
    semester:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    tempat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, 
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
}, {
    freezeTableName: true,
    timestamps: false
});

export default Tanggal_rapor;