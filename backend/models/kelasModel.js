import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Guru from "./guruModel.js";

const DataTypes = Sequelize;
const Kelas = db.define('kelas',{
    id_kelas:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_kelas:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    wali_kelas:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    tahun_ajar:{
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
    
},{
    freezeTableName: true,
    timestamps: false
});

Guru.hasMany(Kelas, {foreignKey:'wali_kelas'});
Kelas.belongsTo(Guru, {foreignKey:'wali_kelas'});

export default Kelas;