import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const DataTypes = Sequelize;
const Sekolah = db.define('sekolah',{
    id_sekolah:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama_sekolah:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    npsn:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [8, 20]
        }
    },
    nss:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [8, 20]
        }
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kode_pos:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [5, 5],
            isNumeric: true,
        }
    },
    telepon:{
        type: DataTypes.STRING(15),
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [9, 15],
            isNumeric: true,
        }
    },
    kelurahan:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kecamatan:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kab_kota:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    provinsi:{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    website:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail:true
        }
    },
    kepsek:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nip_kepsek:{
        type: DataTypes.STRING(30),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true,
    timestamps: false
});

export default Sekolah;