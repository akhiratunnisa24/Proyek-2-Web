import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;
const Ekstrakurikuler = db.define('ekstrakurikuler',{
    id_ekskul:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_ekskul:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    ket_ekskul:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    is_active: {
        type: DataTypes.ENUM('active', 'inactive'), 
        defaultValue: 'active',
        allowNull: false,
    },
},{
    freezeTableName: true,
    timestamps: false
});

export default Ekstrakurikuler;