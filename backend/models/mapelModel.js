import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;
const Mapel = db.define('mapel',{
    id_mapel:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kode_mapel:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_mapel:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kkm:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [2,3],
        },
    },
    kelompok:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        },
    },
    durasi:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [1,2],
        },
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

export default Mapel;