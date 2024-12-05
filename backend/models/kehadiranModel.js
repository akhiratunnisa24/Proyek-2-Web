import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Siswa from "./siswaModel.js";
import Guru from "./guruModel.js";
import Kelas from "./kelasModel.js";
import Mapel from "./mapelModel.js";

const DataTypes = Sequelize;
const Kehadiran = db.define('kehadiran', {
    id_absen: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    id_guru:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    id_kelas:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
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
    hadir: {
        type: DataTypes.ENUM('0', '1'), 
        defaultValue: '1',
        allowNull: false,
    },
    sakit: {
        type: DataTypes.ENUM('0', '1'), 
        defaultValue: '0',
        allowNull: false,
    },
    izin: {
        type: DataTypes.ENUM('0', '1'), 
        defaultValue: '0',
        allowNull: false,
    },
    alpha: {
        type: DataTypes.ENUM('0', '1'), 
        defaultValue: '0',
        allowNull: false,
    },
    id_mapel:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    id_semester:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    keterangan:{
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

Siswa.hasMany(Kehadiran, {foreignKey:'id_siswa'});
Kehadiran.belongsTo(Siswa, {foreignKey:'id_siswa'});

Guru.hasMany(Kehadiran, {foreignKey:'id_guru'});
Kehadiran.belongsTo(Guru, {foreignKey:'id_guru'});

Kelas.hasMany(Kehadiran, {foreignKey:'id_kelas'});
Kehadiran.belongsTo(Kelas, {foreignKey:'id_kelas'});

Mapel.hasMany(Kehadiran, {foreignKey:'id_mapel'});
Kehadiran.belongsTo(Mapel, {foreignKey:'id_mapel'});

export default Kehadiran;