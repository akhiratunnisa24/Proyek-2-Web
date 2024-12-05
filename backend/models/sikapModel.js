import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Siswa from "./siswaModel.js";
import Tanggal_rapor from "./tanggalraporModel.js";

const DataTypes = Sequelize;
const Sikap = db.define('sikap', {
    id_sikap: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    sikap_sosial: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    sikap_spiritual: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    keputusan: {
        type: DataTypes.STRING,
        allowNull: true,
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

Siswa.hasMany(Sikap, {foreignKey:'id_siswa'});
Sikap.belongsTo(Siswa, {foreignKey:'id_siswa'});

Tanggal_rapor.hasMany(Sikap, {foreignKey:'id_tanggal'});
Sikap.belongsTo(Tanggal_rapor, {foreignKey:'id_tanggal'});

export default Sikap;