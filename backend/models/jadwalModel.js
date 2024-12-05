import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Guru from "./guruModel.js";
import Mapel from "./mapelModel.js";
import Kelas from "./kelasModel.js";

const DataTypes = Sequelize;
const Jadwal = db.define('jadwal',{
    id_jadwal:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    id_guru:{
        type: DataTypes.INTEGER,
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
    id_kelas:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    hari:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    jam:{
        type: DataTypes.TIME,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    semester:{
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

Guru.hasMany(Jadwal, { foreignKey: 'id_guru' });
Jadwal.belongsTo(Guru, { foreignKey: 'id_guru' });

Mapel.hasMany(Jadwal, { foreignKey: 'id_mapel' });
Jadwal.belongsTo(Mapel, { foreignKey: 'id_mapel' });

Kelas.hasMany(Jadwal, { foreignKey: 'id_kelas' });
Jadwal.belongsTo(Kelas, { foreignKey: 'id_kelas' });

export default Jadwal;