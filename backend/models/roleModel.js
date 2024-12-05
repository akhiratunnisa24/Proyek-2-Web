import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;
const Role = db.define('role', {
    id_role: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default Role;