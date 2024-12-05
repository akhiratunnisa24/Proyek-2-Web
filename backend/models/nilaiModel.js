import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Siswa from "./siswaModel.js";
import Kelas from "./kelasModel.js";
import Mapel from "./mapelModel.js";
import Guru from "./guruModel.js";
import Tanggal_rapor from "./tanggalraporModel.js";

const DataTypes = Sequelize;
const Nilai = db.define('nilai', {
    id_nilai: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    id_mapel:{
        type: DataTypes.INTEGER,
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
    id_kelas:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    id_pengajar:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    semester:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    nilai_pengetahuan: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    predikat_a: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    deskripsi_peng: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nilai_keterampilan: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    predikat_b: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    deskripsi_ket: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
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
}, {
    freezeTableName: true,
    timestamps: false
});

Siswa.hasMany(Nilai, {foreignKey:'id_siswa'});
Nilai.belongsTo(Siswa, {foreignKey:'id_siswa'});

Mapel.hasMany(Nilai, {foreignKey:'id_mapel'});
Nilai.belongsTo(Mapel, {foreignKey:'id_mapel'});

Kelas.hasMany(Nilai, {foreignKey:'id_kelas'});
Nilai.belongsTo(Kelas, {foreignKey:'id_kelas'});

Guru.hasMany(Nilai, {foreignKey:'id_pengajar'});
Nilai.belongsTo(Guru, {foreignKey:'id_pengajar'});

Tanggal_rapor.hasMany(Nilai, {foreignKey:'id_tanggal'});
Nilai.belongsTo(Tanggal_rapor, {foreignKey:'id_tanggal'});

export default Nilai;