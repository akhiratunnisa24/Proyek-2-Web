import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Siswa from "./siswaModel.js";
import Tanggal_rapor from "./tanggalraporModel.js";
import Ekstrakurikuler from "./ekstrakurikulerModel.js";

const DataTypes = Sequelize;
const Nilai_ekskul = db.define('nilai_ekskul', {
    id_nilaiekskul: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_ekskul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    desk_ekskul: {
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
        },
    },
    id_ekskul:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
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
}, {
    freezeTableName: true,
    timestamps: false
});

Siswa.hasMany(Nilai_ekskul, {foreignKey:'id_siswa'});
Nilai_ekskul.belongsTo(Siswa, {foreignKey:'id_siswa'});

Tanggal_rapor.hasMany(Nilai_ekskul, {foreignKey:'id_tanggal'});
Nilai_ekskul.belongsTo(Tanggal_rapor, {foreignKey:'id_tanggal'});

Ekstrakurikuler.hasMany(Nilai_ekskul, {foreignKey:'id_ekskul'});
Nilai_ekskul.belongsTo(Ekstrakurikuler, {foreignKey:'id_ekskul'});

export default Nilai_ekskul;