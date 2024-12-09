import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Users from "./userModel.js";

const Guru = db.define('guru', {
    id_guru: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
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
    nip_guru: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [8, 20]
        }
    },
    nama_guru: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
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
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
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
    no_telp: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [9, 15],
            isNumeric: true,
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
}, {
    freezeTableName: true,
    timestamps: false
});

Users.hasMany(Guru, { foreignKey: 'id_user' });
Guru.belongsTo(Users, { foreignKey: 'id_user' });

export default Guru;
