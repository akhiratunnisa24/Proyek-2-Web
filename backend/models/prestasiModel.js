import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Tanggal_rapor from "./tanggalraporModel.js";
import Siswa from "./siswaModel.js";

const DataTypes = Sequelize;
const Prestasi = db.define('Prestasi',{
    id_prestasi:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_prestasi:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    deskripsi:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    id_siswa:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    id_tanggal:{
        type: DataTypes.INTEGER,
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

Siswa.hasMany(Prestasi, {foreignKey:'id_siswa'});
Prestasi.belongsTo(Siswa, {foreignKey:'id_siswa'});

Tanggal_rapor.hasMany(Prestasi, {foreignKey:'id_tanggal'});
Prestasi.belongsTo(Tanggal_rapor, {foreignKey:'id_tanggal'});

export default Prestasi;