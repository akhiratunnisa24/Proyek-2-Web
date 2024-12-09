import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Kelas from "./kelasModel.js";
import Users from "./userModel.js";

const DataTypes = Sequelize;
const Siswa = db.define('siswa',{
    id_siswa:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nis:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [8, 20]
        }
    },
    nama_siswa:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    tenpat_lahir:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    tgl_lahir: {
        type: DataTypes.DATEONLY, 
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true,
            isBefore: new Date().toISOString().split('T')[0],
        }
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    gender: {
        type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
        defaultValue: 'Laki-laki', 
        allowNull: false,
        validate: {
            notEmpty: true, 
            isIn: [['Laki-laki', 'Perempuan']], 
        }
    },
    id_kelas:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    status: {
        type: DataTypes.ENUM('0', '1'), 
        defaultValue: '0',
        allowNull: false,
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

Users.hasMany(Siswa, {foreignKey:'id_user'});
Siswa.belongsTo(Users, {foreignKey:'id_user'});

Kelas.hasMany(Siswa, {foreignKey:'id_kelas'});
Siswa.belongsTo(Kelas, {foreignKey:'id_kelas'});

export default Siswa;